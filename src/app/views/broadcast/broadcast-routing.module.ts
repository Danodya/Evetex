import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { BroadCastComponent } from './broadcast.component';

const routes: Routes = [
  {
    path: '',
    component: BroadCastComponent,
    data: {
      title: 'myevent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadCastRoutingModule {}
