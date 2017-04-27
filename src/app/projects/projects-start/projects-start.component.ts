import { Component, OnInit } from '@angular/core';
import { Project } from 'app/projects/project.model';
import { ProjectsService } from 'app/projects/projects.service';

@Component({
  selector: 'app-projects-start',
  templateUrl: './projects-start.component.html',
  styleUrls: ['./projects-start.component.css']
})
export class ProjectsStartComponent implements OnInit {

  projects: Project[];
  displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          if (this.projects.length >= 1) {
            this.displayedProjects.push(this.projects[0]);
          }
        }
      );
  }
}
