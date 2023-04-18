import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputtagwithiconComponent } from './inputtagwithicon/inputtagwithicon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { ButtontagComponent } from './buttontag/buttontag.component';
import { TextareatagComponent } from './textareatag/textareatag.component';



@NgModule({
  declarations: [
    InputtagwithiconComponent,
    ButtontagComponent,
    TextareatagComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    InputtagwithiconComponent,
    ButtontagComponent,
    TextareatagComponent

  ]
})
export class ReusebleModule { }
