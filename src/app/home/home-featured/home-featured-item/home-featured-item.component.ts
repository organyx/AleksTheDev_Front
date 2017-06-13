import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'app/projects/project.model';

@Component({
  selector: 'app-home-featured-item',
  templateUrl: './home-featured-item.component.html',
  styleUrls: ['./home-featured-item.component.css']
})
export class HomeFeaturedItemComponent implements OnInit {
  @Input() project: Project;
  @Input() projectId: number;

  constructor() { }

  ngOnInit() {
  }

}
