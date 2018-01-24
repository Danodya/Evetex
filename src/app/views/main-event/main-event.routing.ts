import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MainEventComponent } from './main-event.component';
//import { MyEventComponent } from 'app/views/my-event/my-event.component';

const routes: Routes = [
  {
    path: '',
    component:  MainEventComponent,
    data: {
      title: 'mainevent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainEventRoutingModule {}