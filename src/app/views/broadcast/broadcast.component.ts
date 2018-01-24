import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ProfileService} from '../../services/serviceProvider.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-my-event',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss'],
  providers:[ProfileService]
})
export class BroadCastComponent implements OnInit {

  constructor(private http:Http,private profileService:ProfileService,private router:Router) { }
iventId:string;
date:Date;
time:Time;
filesToUpload: Array<File> = [];
isFiled:boolean =false;
isSucces:boolean =false;

formdata:boolean;
  ngOnInit() {
   this.iventId = JSON.parse(localStorage.getItem('eventid'));
   if(!localStorage.getItem('eventid')){
      
      this.router.navigate(['/eventlogin']);

   }
  }

  broadcast ={
    picture:'',
    eventname:'',
    eventdiscription:'',
    eventDate:'',
    eventTime:'',
    eventType:''
  }

  EventTypes =[
{'eventtype':'publuc'},
{'eventtype':'private'}

 ]

 onSelect(selectedType){
  
     
      for (var i = 0; i < this.EventTypes.length; i++)
      {
        if (this.EventTypes[i].eventtype == selectedType) {
       
          this.broadcast. eventType =selectedType;
         console.log( this.broadcast. eventType);
        }
      }

    }

  onDateChange(event){
   this.broadcast.eventDate =event;
   console.log(event);

  }
  onTimeChange(time){
   this.broadcast.eventTime =time;
   console.log(time);

  }

  uploadEvent(){
    console.log('in the upload call');
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
console.log(formData);
if(files.length == 0 ){
  this.formdata =true;
  console.log('null photo');

}else {
  this.formdata =false;
  console.log('not null photo');

}
    for(let i =0; i < files.length; i++){
      console.log(files.length);
      
      
      
        formData.append("uploads[]", files[i], files[i]['name']);
       
        
    }
    formData.append("id",this.iventId);
    formData.append("eventname",this.broadcast.eventname);
    formData.append("eventdiscription",this.broadcast. eventdiscription);
    formData.append("eventDate",this.broadcast.eventDate);
    formData.append("eventTime",this.broadcast.eventTime);
    formData.append("eventType",this.broadcast.eventType );
   

    if(this.formdata == true || formData ==''|| this.broadcast.eventdiscription =='' || this.broadcast.eventname =='' ||this.broadcast.eventDate==''|| this.broadcast.eventTime=='' ||  this.broadcast.eventType ==''){
      console.log('some feeld are not fill')
      this.isFiled =true;
} else{
  this.isFiled =false;
    this.http.post('http://localhost:3000/api/event/broadcastEvent',formData)
    .toPromise()
    .then(response=>{
     var  success_1 =response.json()
      console.log( success_1.succes);
      if(success_1.succes==true){
        this.isSucces =true;
        

      }
      console.log(response);
      
    
    }).catch(err=>{

      console.log(err);

    });
    
    
            
   
    
  }
  }

  fileChangeEvent(fileInput: any) {
    
    this.filesToUpload = <Array<File>>fileInput.target.files;
    
    //this.product.photo = fileInput.target.files[0]['name'];
  }
 
}
