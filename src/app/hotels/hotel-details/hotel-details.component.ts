import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{

  hotelId:string='';
  hotelDetails:any
  constructor(private activateRoute:ActivatedRoute,private http:HttpService){
    let id =  this.activateRoute.snapshot.queryParamMap.get('id');
    if(id != null){
      this.hotelId = id;
    }
  }

  ngOnInit(){
this.gwtHotelDetaildById()
  }

  gwtHotelDetaildById(){
    const endPoint:string =  "hotel-details"
    let httpParams:HttpParams = new HttpParams()
        .set("id",this.hotelId)

    this.http.getData(endPoint,httpParams).subscribe((el:any)=>{
      if(el && el.length > 0){
        this.hotelDetails = el[0];
        console.log(this.hotelDetails);
        
      }
    })
  }
}
