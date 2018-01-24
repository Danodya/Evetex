import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe} from '../filter.pipe';
import {EventService} from '../../services/event.service'
import { strictEqual } from 'assert';
class Organizers{
  
  name:string;
  id:string;
  pic:string;
  
  }
@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  providers:[EventService]

})
export class ChatRoomComponent implements OnInit, AfterViewChecked { 

  showmembers:boolean =false;
  organizername:''

  @ViewChild('scroller') private feedContainer: ElementRef;
   
    constructor( private router: Router,private eventservice:EventService) { }
  SpProviderArray:Organizers[] =[];
  sendAddId ={
    eventId:'',
    selectedorganizerId:'',
    
    
  }
  userType:string;
    ngOnInit() {

      if(!localStorage.getItem("firebase:authUser:AIzaSyD0a4zC9sfXTQnBMkJegJ1wMJ_LL822QOw:[DEFAULT]")) {
        
        this.router.navigate(['/chat/chatlogin']);
        
      }
      this.getAllOrganizer();
      this.sendAddId.eventId = JSON.parse(localStorage.getItem('eventid'));
      this.userType = JSON.parse(localStorage.getItem('usertype'));

    }

  
  
    scrollToBottom(): void {
      this.feedContainer.nativeElement.scrollTop
      = this.feedContainer.nativeElement.scrollHeight;
    }
  
    ngAfterViewChecked() {
      this.scrollToBottom();
    }

    valuechange($event){
      var legth = this.organizername.length;
      if(legth >=1){
      
      this.showmembers =true;
      }else{
      this.showmembers =false;
      
      }
      
      
        }
        selectorgaizer(id,name){
          this.organizername = name;
          
          this.sendAddId.selectedorganizerId =id;
          
          this.showmembers =false;
          console.log(id+name);
          
          
            }


        getAllOrganizer(){
          console.log('in body com');
      
          this.eventservice.getAllSpProvider()
          .then(response=>
            {
            console.log(response);
            // this.OrganizerDtail.push(response.allOrganizerArray);
            
            for(var i =0;i<response.allOrganizerArray.length;i++){
          
             this.SpProviderArray.push(response.allOrganizerArray[i]); 
              console.log(response.allOrganizerArray[i]);
      
            }
            console.log(this.SpProviderArray);
            
                }).catch(err=>{
                  console.log(err);
            
                });
              }

              isadd:boolean= false;

              addSelectedSpProvider(){
              
                console.log('in add');
                console.log('hear is '+this.sendAddId.selectedorganizerId);
                this.eventservice.addSelectedSpProvider(this.sendAddId)
                .then(response=>{
                console.log(response);
                if(response.success==true){
                  this.isadd =true;
                }else{
                this.isadd =false;
                
                }


                this.organizername ='';

}).catch(err=>{
  
  console.log(err);
  
  });
  
    }
  }


  



