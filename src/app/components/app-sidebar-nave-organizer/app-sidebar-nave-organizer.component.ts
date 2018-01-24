import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import {ProfileService} from '../../services/serviceProvider.service';
class Url{
  success:boolean;
  status:string;
  message:string;
  photodata:string;
  
}
@Component({
  selector: 'app-sidebar-nave-organizer',
  templateUrl: './app-sidebar-nave-organizer.component.html',
  styleUrls: ['./app-sidebar-nave-organizer.component.scss'],
  providers:[ProfileService] 
})
export class AppSidebarNaveOrganizerComponent implements OnInit {

  constructor(private http:Http,private router:Router,private profileService:ProfileService) { }
  userId={
    userId:''

   }
  ngOnInit() {
   
    this.userId.userId =  JSON.parse(localStorage.getItem('user'));
    console.log( 'hello'+this.userId.userId);
    this.getUserProfilePicture();
  }


  url:Url = {
    success:false,
    status: "",
    message:"",
    photodata:""
    }
    isClickedButton:boolean;
    filesToUpload: Array<File> = [];
 

    getUserProfilePicture(){
      console.log('get user profile picture id '+this.userId.userId);
      this.profileService.getUserProfilepicture(this.userId)
      .then(response=>{
        this.url =response as Url;
  
      }).catch(err=>{
  
        console.log(err);
  
      });
  
  
     }
     viewButton(){
      this.isClickedButton =true;
    }
    
    uploadProfilePicture(){
     console.log('in the upload call');
     const formData: any = new FormData();
     const files: Array<File> = this.filesToUpload;
     console.log(files);
     this.isClickedButton=false;
     for(let i =0; i < files.length; i++){
         formData.append("uploads[]", files[i], files[i]['name']);
     }
     formData.append('userId',this.userId.userId );
     console.log(formData);
  this.http.post('http://localhost:3000/api/profile/updateProfilePicture',formData).toPromise()
     .then((response)=>{
       console.log('here is'+response);
       this.url =response.json() as Url ;
       console.log(this.url);
   
     }).catch((err)=>{
   
         console.log('err');
   
     })
   //   this.profileService.uploadProfilePicture(formData)
   //   .then(response=>{
   //     this.url =response as Url;
   //   console.log(this.url);
   //   }).catch(err=>{
   //     console.log(err);
 
   //   });
   
    }
    fileChangeEvent(fileInput: any) {
      
      this.filesToUpload = <Array<File>>fileInput.target.files;
      
      //this.product.photo = fileInput.target.files[0]['name'];
    }

}
