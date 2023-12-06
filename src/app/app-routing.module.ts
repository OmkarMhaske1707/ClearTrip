import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
  { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
  { path: 'homestays', loadChildren: () => import('./homestays/homestays.module').then(m => m.HomestaysModule) },
  { path: 'holidaypackages', loadChildren: () => import('./holidaypackages/holidaypackages.module').then(m => m.HolidaypackagesModule) },
  { path: 'trains', loadChildren: () => import('./trains/trains.module').then(m => m.TrainsModule) },
  { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, 
  { path: 'buses', loadChildren: () => import('./buses/buses.module').then(m => m.BusesModule) }, 
  { path: 'travel-insurance', loadChildren: () => import('./travel-insurance/travel-insurance.module').then(m => m.TravelInsuranceModule) },
  {path:'',redirectTo:'/flights',pathMatch:'full'},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
