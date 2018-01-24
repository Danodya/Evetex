import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../pages/login/login.service';

import { ProfileService } from '../../services/serviceProvider.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.component';
import {EventService} from '../../services/event.service';
class getNotificationObject {
  
  notification:string;
  eventId:string;
  addedorgnizerProfilePic:string;
  
  }
class Img {
  img: string;
  url: string;
  id: string;
  userId:string;


}
class coverImg {
  img: string;
  id: string;
  

}


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ProfileService,EventService]

})
export class DashboardComponent implements OnInit {
  filesToUpload: Array<File> = [];
  constructor(private eventservice:EventService,private profileService: ProfileService, private http: Http, private router: Router) {

  }
  notificationIdObj ={
    userid:''


  }
  isClickedCoverButton = false;
  shownotificationview:boolean =false;
  getNotifications:getNotificationObject[] =[];
  count: string;
  userType: string;
  User: boolean;
  imagesArray = [];
  imageLinkArray = [];
  img = {
    img: '',
    url: '',
    id: ''

  }

  coverphoto: coverImg = {
    img: '',
    id: '',
   
  }
  imageDetailArray: Img[] = [];

  userId={
    userId:''

   }  
  ngOnInit() {
    if (!localStorage.getItem("user")) {
      this.router.navigate(['/pages/login']);


    }
    this.userType = JSON.parse(localStorage.getItem('usertype'));
    this.userId.userId =  JSON.parse(localStorage.getItem('user'));
    this.notificationIdObj.userid = JSON.parse(localStorage.getItem('user'));
    console.log('user' + this.userType);
    if (this.userType == 'service_provider' || this.userType == 'organizer') {
      this.User = true;
      console.log('user in  ' + this.userType);

    } else {
      this.User = false;

    }

    this.getAdverticement();
    this.getCoverPhoto();
  }
  getnotification() {

    this.getNotification();
   }

  deleteImages(url: any, id: any) {

    var deleteImg = new Img();
    deleteImg.id = id;
    deleteImg.url = url;
    this.profileService.deleteAdverticement(deleteImg)
      .then(response => {

        location.reload();
      }).catch(err => {
        console.log(err);
      });


  }
  uploadCoverPhoto() {
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    this.isClickedCoverButton = false;
    for (let i = 0; i < files.length; i++) {
      formData.append("uploads[]", files[i], files[i]['name']);
    }
    formData.append("userId",this.userId.userId);
    console.log(formData);
    this.http.post('http://localhost:3000/api/Add_2/updateCoverPhoto', formData).toPromise()
      .then((response) => {
        this.coverphoto = response.json() as coverImg;

      }).catch((err) => {

        console.log('err');

      })


  }

  getAdverticement() {
    this.profileService.getAllAdd(this.userId)
      .then(response => {
        for (var i = 0; i < response.imgArray.length; i++) {
          var newImg = new Img();
          newImg.img = response.imgArray[(response.imgArray.length - 1) - i];
          newImg.id = response.id;
          newImg.url = response.imgLinkArray[(response.imgArray.length - 1) - i];

          this.imageDetailArray.push(newImg);
        }


      }).catch(err => {

        console.log('in dash err');
      })

  }
  viewCoverButton() {

    this.isClickedCoverButton = true;

  }
  getCoverPhoto() {

    this.profileService.getCovePoto(this.userId)
      .then(response => {
        this.coverphoto = response;



      }).catch(err => {

        console.log('cover get err');

      });


  }


  getNotification(){
    this.eventservice.getNotification(this.notificationIdObj)
    .then(response=>{
      console.log(response.notificationMyArray);
      this.getNotifications.length =0;
      for(var i=0;i<response.notificationMyArray.length;i++){
        this. getNotifications.push(response.notificationMyArray[i]);
        console.log(response.notificationMyArray[i]);



      }
      console.log(this. getNotifications);


    }).catch(err=>{

  console.log(err);


    });


  }


  fileChangeEvent(fileInput: any) {

    this.filesToUpload = <Array<File>>fileInput.target.files;

    //this.product.photo = fileInput.target.files[0]['name'];
  }


}
