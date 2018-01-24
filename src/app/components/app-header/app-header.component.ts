import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheService }from '../../views/pages/register/authe.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./appheader.componet.scss']
})
export class AppHeaderComponent { 

  constructor(
    private router: Router,
    private autheService:AutheService
  ) { }

  logout(){

        this.autheService.logOut(); 
      
        return false; 
         
        
      }


}
