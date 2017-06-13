import { Component, OnInit } from '@angular/core';
import { Project } from 'app/projects/project.model';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.css']
})
export class HomeFeaturedComponent implements OnInit {



  projects: Project[];
  displayedProjects: Project[] = [];

  constructor() { }

  ngOnInit() {
  }

}
