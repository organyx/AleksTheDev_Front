import { Component, OnInit } from '@angular/core';
import { Project } from 'app/projects/project.model';
import { ProjectsService } from 'app/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
