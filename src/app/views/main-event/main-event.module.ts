import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MainEventComponent } from './main-event.component';
import {MainEventRoutingModule } from './main-event.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MainEventRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ MainEventComponent ]
})
export class MainEventModule { 


 



}