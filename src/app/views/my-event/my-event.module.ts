import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MyEventComponent } from './my-event.component';
import {MyEventRoutingModule } from './my-event-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MyEventRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ MyEventComponent ]
})
export class MyEventModule { }
