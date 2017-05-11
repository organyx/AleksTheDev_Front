import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'app/projects/projects.service';
import { Project } from 'app/projects/project.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  errorMessage: string;
  projects: Project[];
  project: Project;

  constructor(private service: ProjectsService) { }

  ngOnInit() {
  }

  getData() {
    this.service.getProjectsApi()
      .subscribe(
        projects => this.projects = projects,
        error => this.errorMessage = <any>error,
        () => console.log('FooterComponent', this.projects)
      );
  }

  getProject() {
    this.service.getProjectAPI('5913613b81816d05c40a2246')
      .subscribe(
        project => this.project = project,
        error => this.errorMessage = <any>error,
        () => console.log('FooterComponent', this.project));
  }

}
