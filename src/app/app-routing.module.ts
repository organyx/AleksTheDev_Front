import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProjectsComponent } from 'app/projects/projects.component';
import { LabsComponent } from 'app/labs/labs.component';
import { BlogComponent } from 'app/blog/blog.component';
import { HomeComponent } from 'app/home/home.component';
import { ContactComponent } from 'app/contact/contact.component';
import { AuthStartComponent } from 'app/auth/auth-start/auth-start.component';

const appRoutes: Routes = [
    { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule' },
    { path: 'blog', component: BlogComponent },
    { path: 'labs', component: LabsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
