import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './auth/notfound/notfound.component';

const routes: Routes = [
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'/signin',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
