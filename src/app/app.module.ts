import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsService } from 'app/projects/projects.service';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectNewComponent } from './projects/project-new/project-new.component';
import { BlogComponent } from './blog/blog.component';
import { LabsComponent } from './labs/labs.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    UsersComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    ProjectComponent,
    ProjectNewComponent,
    BlogComponent,
    LabsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
