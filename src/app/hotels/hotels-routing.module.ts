import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsComponent } from './hotels.component';

const routes: Routes = [
  { path: '', component: HotelsComponent },
  {path:'hotel-list',component:HotelListComponent},
  {path:'hotel-details',component:HotelDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
