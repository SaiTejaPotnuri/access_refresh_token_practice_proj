import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
