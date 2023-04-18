import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardservicesService {

  constructor(private router: Router, private http: HttpClient,) { }


uploadBioData(bioInfo){

  return this.http.put('http://50.19.24.41/api/band/edit_band', bioInfo)
    
}

fetchDataFromMe(){
  return this.http.get('http://50.19.24.41/api/user/me');
}






}
