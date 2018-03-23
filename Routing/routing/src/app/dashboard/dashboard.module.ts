
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { dashRouting } from './dashboard.route';





@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
  
    dashRouting
  ],
  providers: [],
 
})
export class DashboardModule { }
