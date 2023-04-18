import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
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
  failedRequest:any;
  constructor(private toasterService: ToastrService, private authService: AuthService,private ds:DashboardservicesService) { }

  updateTokenInHeader(requestData, tokenData): any {
    let generatingkeys = requestData.url.includes('generate-tokens')
    this.refreshToken11 = localStorage.getItem('refreshToken') || ''


    if (generatingkeys) {
     return requestData = requestData.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenData}`,
          'client-id': '437920819fa89d19abe380073d28839c',
          'client-secret': '28649120bdf32812f433f428b15ab1a1',
          "x-refresh-token": `${this.refreshToken11}`,

        },
      });
    }
    else {

     return requestData = requestData.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenData}`,
          'client-id': '437920819fa89d19abe380073d28839c',
          'client-secret': '28649120bdf32812f433f428b15ab1a1',
        },
      });

    }

  }


  httpErrorHandling(requestInfo: HttpRequest<any>, next: HttpHandler){


    this.refreshToken11 = localStorage.getItem('refreshToken') || ''

    if (this.refreshToken11){
      return this.authService.generateRefreshToken().pipe(
        switchMap((res:any)=>{
          this.authService.updateTheRefreshTokenAndAccessToken(res.accessToken, res.refreshToken)
          return next.handle(this.updateTokenInHeader(requestInfo, res.accessToken))
        }),
        catchError((error: HttpErrorResponse)=>{
            this.authService.logout()
            return throwError(error.message)
        })
       
      )

    }
    



  }



  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.token = localStorage.getItem('token') || ''


    request = this.updateTokenInHeader(request, this.token)
    


    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.failedRequest=request
        let errorMessage = error.error.message

        if(error.status===401){
          return this.httpErrorHandling(request, next).pipe(
              catchError((error:HttpErrorResponse)=>{

                  errorMessage=error.message
                return throwError(errorMessage)
              })
          )
        }
       

                //       this.toasterService.error(`${errorMessage}`);
        return throwError(errorMessage);
        
      }),
    
    );
  }

}
