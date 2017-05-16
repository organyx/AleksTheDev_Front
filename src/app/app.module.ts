import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsService } from 'app/projects/projects.service';
import { BlogComponent } from './blog/blog.component';
import { LabsComponent } from './labs/labs.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { AuthService } from 'app/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
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
  providers: [ProjectsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
