import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'app/projects/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() projectId: number;
  constructor() { }

  ngOnInit() {
  }

  getPrjStatusClass() {
    return {
      'label-success': this.project.status === 'active',
      'label-default': this.project.status === 'inactive',
      'label-danger': this.project.status === 'critical',
      'label-primary': this.project.status === 'complete',
      'label-info': this.project.status === 'info',
      'label-warning': this.project.status === 'warning'
    };
  }
}
