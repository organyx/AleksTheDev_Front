import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

import { Project } from 'app/projects/project.model';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class ProjectsService {

  recChanged = new EventEmitter<Project[]>();

  constructor(private http: Http, private authService: AuthService) { }

  getProjects(): Observable<Project[]> {
     return this.http.get(`http://localhost:3000/api/v1/projects`)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  getProjectAPI(projectId: string): Observable<Project>  {
    return this.http.get(`http://localhost:3000/api/v1/projects/${projectId}`)
            .map(this.extractData)
            .catch(this.handleError);
  }

  deleteProjectAPI(projectId: string) {
    let headers = this.authService.getTokenHeader();
    return this.http.delete(`http://localhost:3000/api/v1/projects/${projectId}`, { headers: headers})
            .map(this.extractData)
            .catch(this.handleError);
  }

  addProjectAPI(project: Project): Observable<Project> {
    let headers = this.authService.getTokenHeader();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`http://localhost:3000/api/v1/projects/new`, JSON.stringify(project), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
  }

  editProjectAPI(projectId: string, newPrj: Project): Observable<Project> {
    let headers = this.authService.getTokenHeader();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`http://localhost:3000/api/v1/projects/${projectId}`, JSON.stringify(newPrj), { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
  }

  getProjectsApi(): Observable<Project[]> {
      // this.recChanged.emit(this.projects);
     return this.http.get(`http://localhost:3000/api/v1/projects`)
                  .map(this.extractData)
                  .catch(this.handleError);
                  // .finally(() => this.recChanged.emit(this.projects));
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
