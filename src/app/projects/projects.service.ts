import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Headers, Response } from '@angular/http';

import { Project } from 'app/projects/project.model';

@Injectable()
export class ProjectsService {

  recChanged = new EventEmitter<Project[]>();

  private projects: Project[] = [
    { name: 'Learn Angular Styles', 
      description: 'Practice hard to understand how you may style components and update styles dynamically', 
      status: 'active',
      imageUrls: [
        'http://www.personal.psu.edu/users/n/y/nys5290/Project-Image.jpg',
        'http://www.prince2.site/wp-content/uploads/2015/09/project.jpg']
    },
    { name: 'Learn Angular Animations', 
      description: 'Learn how Angular helps with animating elements on your page',
      status: 'active',
      imageUrls: [
        'http://www.personal.psu.edu/users/n/y/nys5290/Project-Image.jpg',
        'http://www.prince2.site/wp-content/uploads/2015/09/project.jpg']
    },
    { name: 'Understanding Angular Basics', 
      description: 'Understand what Angular is, how it works and how and when you might use it', 
      status: 'inactive'},
    { name: 'Learn JavaScript, HTML and CSS', 
      description: 'Absolutely required to dive deep into Angular and all its features', 
      status: 'critical'},
  ];
  constructor(private http: Http) { }

  loadProjects(): Observable<Project[]> {
    const prjLoader = Observable.create((observer: Observer<Project[]>) => {
      setTimeout(() => {
        observer.next(this.projects);
      }, 2000);
    });
    return prjLoader;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectId: number) {
    return this.projects[projectId];
  }

  deleteProject(project: Project) {
    this.projects.splice(this.projects.indexOf(project), 1);
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

  editProject(oldPrj: Project, newPrj: Project) {
    this.projects[this.projects.indexOf(oldPrj)] = newPrj;
  }

}
