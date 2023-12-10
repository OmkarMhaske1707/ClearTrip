import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.css']
})
export class HotelFilterComponent {

  filterObj:any;

  @Output()
  emitFilterObj:EventEmitter<any> = new EventEmitter();
  constructor(){


  }

  ngOnInit(){

    this.filterObj ={
      rating:[
        {
          type:'RATING',
          name:'Excellent',
          filterValue:4,
          isRangeFilter:false,
          rangeFilter:null,
          isSelected:false
        },
        {
          type:'RATING',
          name:'Very Good',
          filterValue:3,
          isRangeFilter:false,
          rangeFilter:null,
          isSelected:false
        },
        {
          type:'RATING',
          name:'Good',
          filterValue:2,
          isRangeFilter:false,
          rangeFilter:null,
          isSelected:false
        },
      ],
      pricePerNight:[
        {
          type:'HOTEL_PRICE-BUCKET',
          filterValue:null,
          isRangeFilter:true,
          rangeFilter:{
            min:0,
            max:2000
          },
          isSelected:false
        },
        {
          type:'HOTEL_PRICE-BUCKET',
          filterValue:null,
          isRangeFilter:true,
          rangeFilter:{
            min:2000,
            max:4000
          },
          isSelected:false
        },
        {
          type:'HOTEL_PRICE-BUCKET',
          filterValue:null,
          isRangeFilter:true,
          rangeFilter:{
            min:4000,
            max:8000
          },
          isSelected:false
        },
        {
          type:'HOTEL_PRICE-BUCKET',
          filterValue:null,
          isRangeFilter:true,
          rangeFilter:{
            min:8000,
            max:12000
          },
          isSelected:false
        },
        {
          type:'HOTEL_PRICE-BUCKET',
          filterValue:null,
          isRangeFilter:true,
          rangeFilter:{
            min:12000,
            max:16000
          },
          isSelected:false
        },
        
      ]
    }
  }
  
    emitData(filterCriteria:any){
      this.emitFilterObj.emit(filterCriteria);
   }
}
