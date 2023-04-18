import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdmindashboardComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
