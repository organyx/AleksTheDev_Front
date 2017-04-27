import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from 'app/projects/projects.component';
import { LabsComponent } from 'app/labs/labs.component';
import { BlogComponent } from 'app/blog/blog.component';
import { HomeComponent } from 'app/home/home.component';

const appRoutes: Routes = [
    { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule' },
    { path: 'blog', component: BlogComponent },
    { path: 'labs', component: LabsComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
