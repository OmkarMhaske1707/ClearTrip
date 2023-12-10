import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl:string = "http://localhost:3000/"
  httpHeader: HttpHeaders= new HttpHeaders({
    'content-type': 'application/json'
  })
  constructor(private http:HttpClient) { }

   getHotelsData(endPoint:string,obj:any){
    let httpParams = new HttpParams()
            .set("city",obj.city)
            .set("checkInDate",obj.checkin)
            .set("checkInOut",obj.checkout)
            .set('rooms',obj.room)

    const url = this.baseurl + endPoint;
    return this.http.get(url,{headers:this.httpHeader,params:httpParams});
    
  }

   getData(endPoint:string,httpParams:HttpParams){
    const url = this.baseurl + endPoint;
   return this.http.get(url,{headers:this.httpHeader,params:httpParams});

   }

   postData(endPoint:string,body:any){
    const url = this.baseurl + endPoint;
   return this.http.post(url,body,{headers:this.httpHeader});

   }
} 
