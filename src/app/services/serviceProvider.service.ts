import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';
class Url{
    success:boolean;
    status:string;
    message:string;
    photodata:string;
    
  }
  class Add{
    success:boolean;
    status:string;
    id:string;
    imgArray:string[];
    imgLinkArray:string[];

  }
  class coverImg{
    img:string;
    id:string;
    
    }
    class EditAbout{
        
        name:string;
        email:string;
        phoneNumber:string;
        address:string;
        qualification:string;
        expirience:string;
        userId:string;
        }
        class Event{
            
              EventTheamArray:string[];
              eventNameArray:string[];
              eventDiscriptionArray:string[];
            
            }
@Injectable()


export class ProfileService{
    private webApi_get_profile_pic='http://localhost:3000/api/profile/getProfilePicture'
    private webApi_upload_profile_pic = 'http://localhost:3000/api/profile/updateProfilePicture';
    private webApi_authenticate = 'http://localhost:3000/api/authenticate';
    private webApi_getAllAdd = 'http://localhost:3000/api/add/getAdd';
    private webApi_getCoverPhotp ='http://localhost:3000/api/Add_2/getCoverphoto';
   private webApi_submitEditAbout ='http://localhost:3000/api/Add_2/submitAbout';
   private webApi_getAbout ='http://localhost:3000/api/Add_2/getEditAbout';
    private headers = new Headers({'Content-Type' : 'application/json'});

    constructor(private http: Http,private router: Router) { }

uploadProfilePicture(formdata:any):Promise<Url>{
    console.log(formdata);
   return this.http.post(this.webApi_upload_profile_pic,formdata, {headers: this.headers})
   .toPromise()
   .then(response=>{
    return response.json() as Url;

    }).catch(err=>{
        console.log('service '+err);
        return err;
    });
}
getCovePoto(userId):Promise<coverImg>{

    console.log();
    return this.http.post(this.webApi_getCoverPhotp,userId)
    .toPromise()
    .then(response=>{
     return response.json() as coverImg;
 
     }).catch(err=>{
         console.log('service '+err);
         return err;
     });

}



getUserProfilepicture(userId):Promise<Url>{
    console.log();
   return this.http.post(this.webApi_get_profile_pic,userId)
   .toPromise()
   .then(response=>{
    return response.json() as Url;

    }).catch(err=>{
        console.log('service '+err);
        return err;
    });
}

getAllAdd(userId):Promise<Add>{
return this.http.post( this.webApi_getAllAdd,userId)
.toPromise().then(response=>{
return response.json() as Add;


}).catch(err=>{
    console.log('err get add in service');
    return err;
})

}

deleteAdverticement(deleteImg):Promise<any>{

console.log('in delet service');
const webApi_deletAdverticement ="http://localhost:3000/api/add/deleteAddverticement";
return this.http.post(webApi_deletAdverticement,deleteImg, {headers: this.headers})
.toPromise()
.then(response=>{
 return response.json();

}).catch(err=>{
console.log('err delete in service');

});

}


submitEditAbout(about:EditAbout):Promise<EditAbout>{

 return this.http.post(this.webApi_submitEditAbout,about,{headers: this.headers})
                .toPromise()
                .then(response=>{
                return response.json() as EditAbout;

            }).catch(err=>{
                console.log('in err service about');
                return err;
            });

}
getEditget(userId):Promise<EditAbout>{
    
     return this.http.post(this.webApi_getAbout,userId)
                    .toPromise()
                    .then(response=>{
                    return response.json() as EditAbout;
    
                }).catch(err=>{
                    console.log('in err service get about');
                    return err;
                });
    
    }

uploadEventData(event:any):Promise<Event>{

return this.http.post('http://localhost:3000/api/Add_2/uploadEventData',event,{headers: this.headers})
.toPromise()
.then(response=>{
return response.json() as Event;


}).catch(err=>{

console.log(err);
return err;
});

    }

    getEvent(){

        return this.http.get('http://localhost:3000/api/Add_2/getEvent',{headers: this.headers})
        .toPromise()
        .then(response=>{
            return response.json() as Event;

        }).catch(err=>{
            
            console.log(err);
            return err;
            });

    }




}