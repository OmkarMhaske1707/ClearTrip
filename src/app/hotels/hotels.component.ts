import { Component } from '@angular/core';
import { idLocale } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {

  city:string= "";
  selectedDate!:Date[];
  rooms:string="";
  checkInDate:any;
  checkOutDate:any;
  roomsArr:string[]=["1 Room , 1 Adult","1 Room , 2 Adult","2 Room , 4 Adult"]
  searchHotel(){
    console.log("city",this.city);
    console.log("date range ",this.selectedDate);
    
    
  }
  daterange(){
    if(this.selectedDate && this.selectedDate.length ==2){
      this.checkInDate = this.selectedDate[0];
      // console.log("checkin",this.checkIn);
      
      this.checkOutDate = this.selectedDate[1];
      // console.log("checkout",this.checkOut);
      
    }
  }

  selectedRooms(option:string){
    this.rooms = option;
  }
}
