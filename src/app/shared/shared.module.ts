import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusebleModule } from './reuseble/reuseble.module';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
      ReusebleModule,
      PrimengModule
  ]
})
export class SharedModule { }
