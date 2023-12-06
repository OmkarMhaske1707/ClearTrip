import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidaypackagesRoutingModule } from './holidaypackages-routing.module';
import { HolidaypackagesComponent } from './holidaypackages.component';


@NgModule({
  declarations: [
    HolidaypackagesComponent
  ],
  imports: [
    CommonModule,
    HolidaypackagesRoutingModule
  ]
})
export class HolidaypackagesModule { }
