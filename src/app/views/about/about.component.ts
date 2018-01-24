import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
class EditAbout{
  
  name:string;
  email:string;
  phoneNumber:string;
  address:string;
  qualification:string;
  expirience:string;
  userId:string;
  }



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers:[ProfileService]
})
export class AboutComponent implements OnInit {

  constructor(private profileService:ProfileService, private http:Http,private router:Router) { }
userType:string;
userId:string;

UserId_1= {

  userId:''
}
  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user'));
    this.userType = JSON.parse(localStorage.getItem('usertype'));
   this.getEditAbout();
  }

  editAbout: EditAbout={
    
      name:'',
      email:'',
      phoneNumber:'',
      address:'',
      qualification:'',
      expirience:'',
      userId:''
    
    
    }
    aboutDetail:EditAbout ={
      name:'',
      email:'',
      phoneNumber:'',
      address:'',
      qualification:'',
      expirience:'',
      userId:''


    };

    submitEdit(){
      this.editAbout.userId =this.userId;

        this.profileService.submitEditAbout(this.editAbout)
        .then(response=>{
          this.editAbout =response;
         console.log(this.editAbout);

        }).catch(err=>{
          console.log('err submit ');
          console.log(err);

        });


    }

    getEditAbout(){
      this.UserId_1.userId =this.userId;

this.profileService.getEditget(this.UserId_1)
.then(response=>{

  this.editAbout =response;

console.log(this.editAbout);
    }).catch(err=>{

      console.log('err in get about ');

    });

}
}
