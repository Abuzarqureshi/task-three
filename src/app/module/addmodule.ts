
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    AccordionModule
  ],
  exports : [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextareaModule,
    InputTextModule,
    FormsModule,
    AccordionModule
  ],
  providers: [
  ]
})
export class AddmoduleModule { }
