import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient,) { }

  apiUrl: string = 'http://50.19.24.41/api/auth/login'
  

  


  generateRefreshToken(){
    return this.http.post('http://50.19.24.41/api/auth/generate-tokens','')
  }


  expiretheAccessToken(){
    let tokenInfo = "Token Expired";
    localStorage.removeItem('token');
    this.setToken(tokenInfo)
  }

  updateTheRefreshTokenAndAccessToken(acToken:string,reToken:string){
    this.setToken(acToken)
    localStorage.removeItem('refreshToken')
    localStorage.setItem('refreshToken', reToken)

  }





  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
   // localStorage.removeItem('token');
    localStorage.clear()
    this.router.navigate(['/signin']);
  }



  login(data: any){

    console.log(data,"Data");

    let loginDetails={
      email: data.userName,
      password: data.password
    }
    
     return this.http.post(this.apiUrl, loginDetails);
  }

  checkUserLoggedInOrNotAndRedirect() {

    this.isLoggedIn() === true
      ? this.router.navigate(['/admin'])
      : this.router.navigate(['/signin'])
  }

}
