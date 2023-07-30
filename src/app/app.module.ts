import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddmoduleModule } from './module/addmodule';
import { FormComponent } from './form/form.component';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordianItemComponent } from './accordian/accordian-item/accordian-item.component';
import { SectionService } from './shared/service/sec.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AccordianComponent,
    AccordianItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    AddmoduleModule,
    BrowserAnimationsModule
  ],
  providers: [
    SectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
