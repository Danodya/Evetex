import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ChatSignUpComponent } from './chat-signup-form.comoponent'

const routes: Routes = [
  {
    path: '',
    component: ChatSignUpComponent  ,
    data: {
      title: 'about'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsignUpRoutingModule {}