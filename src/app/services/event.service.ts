import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';

class Organizer{

    allOrganizerArray:string[];
    success:boolean;

}
class notificationArrays{
    notificationMyArray:string[];
    success:boolean;
    


}

@Injectable()

export class EventService{


    constructor(private http: Http,private router: Router) { }
    private headers = new Headers({'Content-Type' : 'application/json'});
    private web_Api_getNotification ='http://localhost:3000/api/event/getnotification'
    private web_Api_register = 'http://localhost:3000/api/event/registerEvent';
    private web_Api_saveEventLocation = 'http://localhost:3000/api/event/setCoordinats';
    private web_Api_geteventLocation = 'http://localhost:3000/api/event/getCoordinats';
    private web_Api_login = 'http://localhost:3000/api/event/login';
    private web_Api_getorganizers = 'http://localhost:3000/api/event/getorganizers';
    private web_Api_getSp_Provider = 'http://localhost:3000/api/event/getserviceprovider';
    private web_Api_addgetorganizers = 'http://localhost:3000/api/event/addorganizers';
    registerEvent(registerevent){

        return this.http.post(this.web_Api_register,registerevent,{headers: this.headers})
        .toPromise()
        .then(response=>{
                return response.json();



        }).catch(err=>{
            console.log('err regsirer event');
            return err;

        });



    }

    loginEvent(event){
   
     return this.http.post(this.web_Api_login,event,{headers: this.headers})
.toPromise()
.then(response=>{

return response.json() ;

}).catch(err=>{

console.log(err);
return err;

});



    }

    getCoordinate(id){
        console.log('get evetn location sevice');
        
    console.log('in servic'+id);
            return this.http.post(this.web_Api_geteventLocation,id)
            .toPromise()
            .then(res=>{
                console.log(res);

                return res.json()

            })
            .catch(err=>{

                return err;

            });



    }
    saveEventLocation(coords){
        console.log(coords);

    return    this.http.post(this.web_Api_saveEventLocation,coords)
       .toPromise()
       .then(response=>{

            return response.json() ;

       }).catch(err=>{

            return err;

       });
       ; 

    }



    getAllorganizer(){
        console.log('in get service');
return this.http.get(this.web_Api_getorganizers,{headers: this.headers})
.toPromise()
.then(response=>{
   // console.log(response);

return response.json() as Organizer;

}).catch(err=>{

console.log(err);
return err;
});


    }


    getAllSpProvider(){
        console.log('in get  service service');
return this.http.get('http://localhost:3000/api/event/getserviceprovider',{headers: this.headers})
.toPromise()
.then(response=>{
   // console.log(response);

return response.json() as Organizer;

}).catch(err=>{

console.log(err);
return err;
});


    }



    addSelectedSpProvider(selectedorganizer){
        console.log('in the add serviec');
        console.log(selectedorganizer);

                return this.http.post('http://localhost:3000/api/event/addServieceProvider',selectedorganizer,{headers: this.headers})
                .toPromise()
                .then(response=>{
                return response.json();

                }).catch(err=>{

                return err;

                });
                    }



    getNotification(useridobj){
        console.log(useridobj)


return this.http.post(this.web_Api_getNotification,useridobj)
    .toPromise()
        .then(response=>{
  
        return response.json() as notificationArrays;


}).catch(err=>{
console.log('err ger notification');
console.log(err);
return err;
});

    }
    

    addSelectedOrganizer(selectedorganizer){
        console.log('in the add serviec');
        console.log(selectedorganizer);

                return this.http.post(this.web_Api_addgetorganizers,selectedorganizer,{headers: this.headers})
                .toPromise()
                .then(response=>{
                return response.json();

                }).catch(err=>{

                return err;

                });
                    }

                    


}