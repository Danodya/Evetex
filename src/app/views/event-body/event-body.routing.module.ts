import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EventBodyComponent } from './event-body.component'

const routes: Routes = [
  {
    path: '',
    component: EventBodyComponent,
    data: {
      title: 'eventbody'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventBodyRoutingModule {}