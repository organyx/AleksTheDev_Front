import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Project } from 'app/projects/project.model';
import { ProjectsService } from 'app/projects/projects.service';
import { AuthService } from 'app/auth/auth.service';


@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private projectIndex: string;
  selectedProject: Project;
  errorMessage: string;

  constructor(
    private projectService: ProjectsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.projectIndex = params['id'];
        // this.selectedProject = this.projectService.getProject(this.projectIndex);

        this.projectService.getProjectAPI(this.projectIndex)
            .subscribe(
              project => this.selectedProject = project,
              error => this.errorMessage = <any>error,
              () => console.log('ProjectInfoComponent', this.selectedProject)
            );
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['/projects', this.projectIndex, 'edit']);
  }

  onDelete() {
    // this.projectService.deleteProject(this.selectedProject);
    this.projectService.deleteProjectAPI(this.projectIndex)
            .subscribe(
              project => this.selectedProject = project,
              error => this.errorMessage = <any>error,
              () => {
                console.log('ProjectInfoComponent', this.selectedProject);
                this.router.navigate(['/projects']);
              }
            );
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
