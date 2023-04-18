import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, delayWhen, Observable, retry, retryWhen, scan, throwError, timer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../Services/auth.service';
import { DashboardservicesService } from '../Services/dashboardservices.service';
@Injectable()
export class MyinterceptorInterceptor implements HttpInterceptor {

  token: string;
  refreshToken11: string
  refreshtokenStatus: boolean = false;
  constructor(private toasterService: ToastrService, private authService: AuthService, private http: HttpClient,private ds:DashboardservicesService) { }


  errorHandlingMethods(request1){
    if (request1.method === 'PUT') {
      console.log("Came inside file");

      this.http.put(request1.url,request1.body)
    }
  }


  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem('token') || ''
    let generatingkeys = request.url.includes('generate-tokens')
    this.refreshToken11 = localStorage.getItem('refreshToken') || ''


    if (generatingkeys) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
          'client-id': '437920819fa89d19abe380073d28839c',
          'client-secret': '28649120bdf32812f433f428b15ab1a1',
          "x-refresh-token": `${this.refreshToken11}`,

        },
      });
    }
    else {

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`,
          'client-id': '437920819fa89d19abe380073d28839c',
          'client-secret': '28649120bdf32812f433f428b15ab1a1',
        },
      });

    }
    this.errorHandlingMethods(request)


    return next.handle(request).pipe(
      
      catchError((error: HttpErrorResponse) => {
        let errorMessage = error.error.message

        this.authService.generateRefreshToken().subscribe((res) => {
          this.authService.updateTheRefreshTokenAndAccessToken(res['accessToken'], res['refreshToken'])
          console.log(request,"request");

          
        })
        
        this.errorHandlingMethods(request)


                //       this.toasterService.error(`${errorMessage}`);
        return throwError(errorMessage);
        
      }),
      
    
    );

  }

}
