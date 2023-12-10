import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  addUserDetails(userobj:any){
    //stringify - convert json object to string
   let userDetails = JSON.stringify(userobj);
    sessionStorage.setItem('userInfo',userDetails);


  }
  getUserDetails(){
    let userInfo = sessionStorage.getItem('userInfo');
    if(userInfo != null){

      //parse - it will extract string to  original object
      userInfo = JSON.parse(userInfo)
    }
    return null;
  }
}
