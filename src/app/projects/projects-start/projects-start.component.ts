import { Component, OnInit } from '@angular/core';

import { Project } from 'app/projects/project.model';
import { ProjectsService } from 'app/projects/projects.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-projects-start',
  templateUrl: './projects-start.component.html',
  styleUrls: ['./projects-start.component.css']
})
export class ProjectsStartComponent implements OnInit {

  errorMessage: string;
  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService, private authService: AuthService) { }

  ngOnInit() {
    // this.prjService.loadProjects()
    //   .subscribe(
    //     projects => this.projects = projects,
    //     error => this.errorMessage = <any>error,
    //     () => {
    //       this.progress = 'finished';
    //       if (this.projects.length >= 1) {
    //         this.displayedProjects.push(this.projects[0]);
    //       }
    //     }
    //   );

    this.prjService.getProjectsApi()
      .subscribe(
        projects => this.projects = projects,
        error => this.errorMessage = <any>error,
        () => {
          console.log('ProjectsStartComponent', this.projects);
          this.progress = 'finished';
          if (this.projects.length >= 1) {
            this.displayedProjects.push(this.projects[0]);
          }
        }
      );
    // this.prjService.recChanged.subscribe(
    //   (projects: Project[]) => this.projects = projects
    // );
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
