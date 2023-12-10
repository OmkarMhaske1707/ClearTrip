import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { min } from 'rxjs';
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
      hotelListCopy:any;
  constructor(private activeroute:ActivatedRoute,private httpSvc:HttpService,private router:Router){ 
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
        this.hotelListCopy =[...this.hotelList];
        console.log("hotels all data",this.hotelListCopy);
        
      }
    })
    }

    selectHotel(hotelId:string){
      this.router.navigate(['/hotels/hotel-details'],{queryParams:{id:hotelId}})
    }


    rout:any
    sortHotels(type:string){
     this.borderSelected = type;
     if(type == 'popular'){                     //unrunable code 
      
      if(this.hotelList.b.reviewSummary.cumulativeRating <=4 && this.hotelList.a.reviewSummary.cumulativeRating <=4){

        this.hotelList.sort((a:any,b:any)=>  (b.reviewSummary.cumulativeRating) - a.reviewSummary.cumulativeRating)
      }
      
      // this.router.navigate(['hotel-list'])
     }
      else if(type == 'rating'){

        this.hotelList.sort((a:any,b:any)=>  b.reviewSummary.cumulativeRating - a.reviewSummary.cumulativeRating)
      }
      else if(type == 'price_high'){
        this.hotelList.sort((a:any,b:any)=>  b.priceDetail.discountedPrice - a.priceDetail.discountedPrice)
        
      } 
      else if(type == 'price_low'){
        this.hotelList.sort((a:any,b:any)=>  a.priceDetail.discountedPrice - b.priceDetail.discountedPrice)

        } 

    }

    getFilterCriteria(FilterCriteria:any){
      console.log("filtered data",FilterCriteria);
      this.filterHotels(FilterCriteria)
    } 
    filterHotels(Criteria: any) {
      if(Criteria.type == 'RATING' && Criteria.isSelected){
          this.hotelList = this.hotelListCopy.filter((el:any) => el.reviewSummary?.cumulativeRating > Criteria.filterValue)
          
          
        }else if(Criteria.type == 'HOTEL_PRICE-BUCKET' && Criteria.isSelected){
          this.hotelList = this.hotelListCopy.filter((el:any) => (el.priceDetail?.discountedPrice > Criteria.rangeFilter.min && el.priceDetail?.discountedPrice <=  Criteria.rangeFilter.max))
          
        }else{
          this.hotelList = this.hotelListCopy;
        }
      }
   
}

