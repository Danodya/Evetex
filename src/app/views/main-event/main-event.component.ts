import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

class EventType {
  
  eventTypeId:string;
  eventType:string;
  
  }

  class registerEvent{

eventname:string;
password:string;
eventtype:EventType;


  }
@Component({
  selector: 'app-main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.scss'],
  providers:[EventService]
})
export class MainEventComponent implements OnInit {

  constructor( private eventService:EventService,private router:Router) { }

  ngOnInit() {
  }
 


  selectedEventType:EventType =new EventType();
  registerevent:registerEvent ={
    eventname:'',
    password:'',
    eventtype:this.selectedEventType


  }
  
  EventTypes:EventType[] =[
    {"eventTypeId":'1',"eventType":"BIRTHDAY"},
    {"eventTypeId":'2',"eventType":"WEDDING"},
    {"eventTypeId":'3',"eventType":"GETTOGETHER"},
    {"eventTypeId":'4',"eventType":"ALMSGIVING"},
    {"eventTypeId":'5',"eventType":"CONFERANCE"},
    {"eventTypeId":'5',"eventType":"FAMILY PARTY"},
    {"eventTypeId":'5',"eventType":"PARTY"}
  ];

  onSelect(selectedType){

    this.selectedEventType =null;
    for (var i = 0; i < this.EventTypes.length; i++)
    {
      if (this.EventTypes[i].eventType == selectedType) {
        this.selectedEventType = this.EventTypes[i];
        this.registerevent.eventtype =this.selectedEventType;
       
      }
    }
  }


  registerEvent(){

console.log(this.registerevent);
this.eventService.registerEvent(this.registerevent)
.then(response=>{
this.router.navigate(['eventlogin']);
console.log(response);


}).catch(err=>{

console.log();

});






  }

}
