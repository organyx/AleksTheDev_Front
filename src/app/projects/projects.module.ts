import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectsComponent } from 'app/projects/projects.component';
import { ProjectComponent } from 'app/projects/project/project.component';
import { ProjectNewComponent } from 'app/projects/project-new/project-new.component';
import { ProjectInfoComponent } from 'app/projects/project-info/project-info.component';
import { ProjectsRoutingModule } from 'app/projects/projects-routing.module';
import { ProjectsStartComponent } from './projects-start/projects-start.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectComponent,
        ProjectNewComponent,
        ProjectInfoComponent,
        ProjectsStartComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProjectsRoutingModule
    ]
})

export class ProjectsModule {}