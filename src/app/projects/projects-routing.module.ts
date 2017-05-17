import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from 'app/projects/projects.component';
import { ProjectInfoComponent } from 'app/projects/project-info/project-info.component';
import { ProjectNewComponent } from 'app/projects/project-new/project-new.component';
import { ProjectsStartComponent } from 'app/projects/projects-start/projects-start.component';
import { AuthGuard } from 'app/guards/auth.guard';

const projectsRoutes: Routes = [
    { path: '', component: ProjectsComponent, children: [
        { path: '', component: ProjectsStartComponent },
        { path: 'new', component: ProjectNewComponent, canActivate: [AuthGuard] },
        { path: ':id', component: ProjectInfoComponent },
        { path: ':id/edit', component: ProjectNewComponent, canActivate: [AuthGuard]}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
