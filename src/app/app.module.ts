import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MyinterceptorInterceptor } from './Interceptors/myinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1300,
      preventDuplicates: true,
      tapToDismiss: true,
    }),


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyinterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
