import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EventloginComponent } from './eventlogin.component';
import { EventloginRoutingModule } from './eventlogin.routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    EventloginRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ EventloginComponent ]
})
export class EventloginModule { 


 



}