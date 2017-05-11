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

}
