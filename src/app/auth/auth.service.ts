import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/api/v1/users', body, {headers : headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/api/v1/users/login', body, {headers : headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('ProjectsService', body);
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, figure out remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
