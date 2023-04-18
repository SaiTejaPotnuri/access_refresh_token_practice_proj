import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Gurds/auth.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdmindashboardComponent,
    children: [
      { path: 'homepage', component: HomepageComponent  },
      { path: '', redirectTo: '/admin/homepage', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
