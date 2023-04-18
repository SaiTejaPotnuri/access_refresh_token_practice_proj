import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm:FormGroup;
  signInButtonLoadStatus:boolean=false

  constructor(private fb: FormBuilder, private authService: AuthService, private toasterService: ToastrService,private router:Router) {

    this.loginForm= this.fb.group({

      userName: ['', [Validators.required]],
      password:['',[Validators.required]]

    })

   }
   
  ngOnInit(): void {
    this.authService.checkUserLoggedInOrNotAndRedirect();
  }


  submitSignInDetails(loginDetails){
    let responseFromLoginApi

    responseFromLoginApi = this.authService.login(loginDetails);
    responseFromLoginApi.subscribe(
      (res) => {
        this.authService.setToken(res['data']['accessToken']);
        localStorage.setItem('refreshToken', res['data']['refreshToken'])
        console.log(res,"res");
        
        this.toasterService.success(`${res['message']}`, '');
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 1500);
        this.loginForm.reset();
      },
      (error) => {
        // this.isLoading=false;
        console.log(error.message);
      }
    );

  }



  

}
