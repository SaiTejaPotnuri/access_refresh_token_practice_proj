import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.checkUserLoggedInOrNotAndRedirect();
  }

}
