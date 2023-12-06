import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent{

  
      searchHotelObj:any = {
        city:"",
        checkInDate:null,
        checkOutDate:null,
        rooms:"",
      }
      
    hotelList:any
    borderSelected:string='';

  constructor(private activeroute:ActivatedRoute,private httpSvc:HttpService){ 
   this.searchHotelObj.city = this.activeroute.snapshot.queryParamMap.get("city");
   this.searchHotelObj.checkInDate = this.activeroute.snapshot.queryParamMap.get("checkin");
   this.searchHotelObj.checkOutDate = this.activeroute.snapshot.queryParamMap.get("checkout");
   this.searchHotelObj.rooms = this.activeroute.snapshot.queryParamMap.get("room");

   console.log("hotel-list data :",this.searchHotelObj);
   
  }
  
  
  ngOnInit(){
    let endPoint="search-hotels";

    this.httpSvc.getHotelsData(endPoint,this.searchHotelObj).subscribe((el:any)=>{       
      if(el && el.response && el.response.personalizedSections){
        this.hotelList = el.response.personalizedSections[0].hotels;
        console.log("hotels all data",this.hotelList);
        
      }
    })
    }

    sortHotels(type:string){
     this.borderSelected = type;
      if(type == 'rating'){

        this.hotelList.sort((a:any,b:any)=>  b.reviewSummary.cumulativeRating - a.reviewSummary.cumulativeRating)
      }
      else if(type == 'price_high'){
        this.hotelList.sort((a:any,b:any)=>  b.priceDetail.discountedPrice - a.priceDetail.discountedPrice)
        
      } 
      else if(type == 'price_low'){
        this.hotelList.sort((a:any,b:any)=>  a.priceDetail.discountedPrice - b.priceDetail.discountedPrice)

        } 

    }
}
