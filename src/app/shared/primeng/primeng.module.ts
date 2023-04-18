import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule
    
  ],
  exports: [InputTextModule, ButtonModule, InputTextareaModule]
})
export class PrimengModule { }
