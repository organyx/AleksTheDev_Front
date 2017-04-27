import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Project } from 'app/projects/project.model';
import { ProjectsService } from 'app/projects/projects.service';


@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private projectIndex: number;
  selectedProject: Project;

  constructor(
    private projectService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.projectIndex = params['id'];
        this.selectedProject = this.projectService.getProject(this.projectIndex);
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
    this.projectService.deleteProject(this.selectedProject);
    this.router.navigate(['/projects']);
  }

}
