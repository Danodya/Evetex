import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './about.component';
import {AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AboutRoutingModule,
    ChartsModule,
    BsDropdownModule.forRoot(),FormsModule,CommonModule
  ],
  declarations: [ AboutComponent ]
})
export class AboutModule { }
