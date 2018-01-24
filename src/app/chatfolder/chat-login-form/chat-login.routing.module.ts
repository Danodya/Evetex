import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ChatLoginFormComponent } from './chat-login-form.comoponent'

const routes: Routes = [
  {
    path: '',
    component:ChatLoginFormComponent  ,
    data: {
      title: 'about'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatLoginRoutingModule {}