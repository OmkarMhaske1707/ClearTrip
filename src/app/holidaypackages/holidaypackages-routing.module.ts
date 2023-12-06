import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaypackagesComponent } from './holidaypackages.component';

const routes: Routes = [{ path: '', component: HolidaypackagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidaypackagesRoutingModule { }
