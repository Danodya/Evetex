import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { EventloginComponent } from './eventlogin.component'

const routes: Routes = [
  {
    path: '',
    component: EventloginComponent,
    data: {
      title: 'eventbody'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventloginRoutingModule {}