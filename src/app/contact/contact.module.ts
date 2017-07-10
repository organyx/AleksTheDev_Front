import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from 'app/contact/contact.component';
import { ContactRoutingModule } from 'app/contact/contact-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
