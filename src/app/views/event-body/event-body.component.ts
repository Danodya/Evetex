import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterPipe} from '../filter.pipe';
import {EventService} from '../../services/event.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http/src/static_response';
import { routes } from 'app/app.routing';
// import { ViewChild } from '@angular/core/src/metadata/di';
import { GetUserComponent } from 'app/components/getuser/getuser.component';
class Organizers{

name:string;
id:string;
pic:string;

}
@Component({
  selector: 'app-event-body',
  templateUrl: './event-body.component.html',
  styleUrls: ['./event-body.component.scss'],
  providers:[EventService]

})
export class EventBodyComponent implements OnInit {
  OrganizerDtail:Organizers[] =[];
  eventname:string;
  showmembers:boolean =false;
  organizername:''
  isadd:boolean = false;
  sendAddId ={
    eventId:'',
    selectedorganizerId:'',
    addeduser:'' 
  }
  @ViewChild(GetUserComponent) getUserComponent : GetUserComponent;

 coordinats ={
lat:6.9271,
lng:79.8612,
eventId:''
}
 getEventLocation_for_id ={
  eventId:''

 }

 

  constructor(private eventservice: EventService,private router:Router) {}
  
  ngOnInit() {
    if(!localStorage.getItem('eventid')){

      this.router.navigate(['/eventlogin']);
    }
   
   this.eventname = JSON.parse(localStorage.getItem('eventname'));
    this.sendAddId.eventId = JSON.parse(localStorage.getItem('eventid'));
    this.coordinats.eventId =  JSON.parse(localStorage.getItem('eventid'));
    this.getEventLocation_for_id.eventId=  JSON.parse(localStorage.getItem('eventid'));
    this.sendAddId.addeduser =JSON.parse(localStorage.getItem('user'));
    this.getEventLocation();
    this.getAllOrganizer();

   
    console.log('hear'+this.sendAddId.addeduser);
  
  
  }


  getEventLocation(){
console.log('get event location');
// console.log(this.eventId);
this.eventservice.getCoordinate( this.getEventLocation_for_id)
.then(response=>{
  this.coordinats.lat =response.lat;
  this.coordinats.lng = response.lng;
console.log(response);


}).catch(err=>{

console.log(err);

});
  }
  
  saveEventlocation(){
    console.log('save location');

    this.eventservice.saveEventLocation(this.coordinats)
    .then(response=>{
      this.coordinats.lat =response.lat;
      this.coordinats.lng = response.lng;


    }).catch(err=>{
console.log('err');

    });



  }

  mapClick(event){
this.coordinats.lat =event.coords.lat;
this.coordinats.lng =event.coords.lng;
this.saveEventlocation();
    console.log(event);
  }
  closeAleart(){

    this.isadd =false;
  }
  addOrganizer(){
console.log('in add');
this.eventservice.addSelectedOrganizer(this.sendAddId)
.then(response=>{
console.log(response);
if(response.success==true){
  this.isadd =true;
}else{
this.isadd =false;

}


}).catch(err=>{

console.log(err);

});

  }
  selectorgaizer(id,name){
this.organizername = name;

this.sendAddId.selectedorganizerId =id;

this.showmembers =false;

  }
  valuechange($event){
var legth = this.organizername.length;
if(legth >=1){

this.showmembers =true;
}else{
this.showmembers =false;

}


  }

  getAllOrganizer(){
    console.log('in body com');

    this.eventservice.getAllorganizer()
    .then(response=>{
      console.log(response);
      // this.OrganizerDtail.push(response.allOrganizerArray);
      
      for(var i =0;i<response.allOrganizerArray.length;i++){
        var organizer = new Organizers();
       this. OrganizerDtail.push(response.allOrganizerArray[i]); 
        //console.log(response.allOrganizerArray[i]);

      } 

console.log(this.OrganizerDtail);

    }).catch(err=>{
      console.log(err);

    });
  }

  /**
   * name
   */
  public getAddedUser() {
    this.getUserComponent._get()
  }




}

interface marker {

name:string;
lat:number;
lng:number;
draggable:boolean;


}
