import { Component,OnInit } from '@angular/core';
import {EventService} from '../../services/event.service' ;

class getNotificationObject {

notification:string;
eventId:string;
addedorgnizerProfilePic:string;

}
@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html',
  providers:[EventService]
})
export class AppAsideComponent implements OnInit{
  notificationIdObj ={
    userid:''


  }
 

  getNotifications:getNotificationObject[] =[];

  

  
  notificationArryObject:string[] =[];
  constructor(private eventservice:EventService) { }
  ngOnInit(){


    this.notificationIdObj.userid = JSON.parse(localStorage.getItem('user'));
    
    console.log('in aside');
    console.log('here aside'+this.notificationIdObj.userid);
    this.getNotification();
  }
  
  countNOtificarion =0;


  getNotification(){
    this.eventservice.getNotification(this.notificationIdObj)
    .then(response=>{
      console.log(response.notificationMyArray);
      for(var i=0;i<response.notificationMyArray.length;i++){
        this. getNotifications.push(response.notificationMyArray[i]);
        console.log(response.notificationMyArray[i]);



      }
      console.log(this. getNotifications);
     this. countNOtificarion =this.getNotifications.length;


    }).catch(err=>{

  console.log(err);


    });


  }
}
