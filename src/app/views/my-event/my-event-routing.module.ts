import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { MyEventComponent } from './my-event.component';

const routes: Routes = [
  {
    path: '',
    component: MyEventComponent,
    data: {
      title: 'myevent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyEventRoutingModule {}
