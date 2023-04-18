import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { retry } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { DashboardservicesService } from 'src/app/Services/dashboardservices.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  bioDataFrom: FormGroup;
  bioDataButtonLoad: boolean = false
  numberOfSecondsToRetry: number = 3000;


  constructor(private authService: AuthService, private fs: FormBuilder, private ds: DashboardservicesService, private toasterService: ToastrService) {
    this.bioDataFrom = this.fs.group({
      myBioData: ['', [Validators.required]]
    })
  }


  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
  }


  uploadBioDataFromHomepage(biodata){
    this.ds.uploadBioData(biodata).subscribe((res) => {

      this.bioDataButtonLoad = false;
      this.toasterService.success(`${res['message']}`);
      this.bioDataFrom.reset();

    }, error => {

    })

  }





  submitBioDetails() {

    this.bioDataButtonLoad = true;

    
    this.ds.fetchDataFromMe().subscribe( (res) => {

      
      let { logo:logoInfo, id:idInfo, title:titleInfo }= res['data']['bands'][0]
      

      let biodatatoUpload = {
        logo: logoInfo,
        bandId: idInfo,
        title: titleInfo,
        description: this.bioDataFrom.get('myBioData')?.value || ''
      }
      this.uploadBioDataFromHomepage(biodatatoUpload)
      // I am editing token here
       // this.authService.expiretheAccessToken(); 
    
    })

    

  }


}
