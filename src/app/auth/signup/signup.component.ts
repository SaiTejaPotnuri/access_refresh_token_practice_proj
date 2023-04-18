import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkUserLoggedInOrNotAndRedirect();
  }

}
