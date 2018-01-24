import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { GetUserComponent } from './components/getuser/getuser.component';
//import {ChatLayoutComponent} from './containers/caht-layout/chat-layout.component'

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent,
  ChatLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent,
  ChatLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarHeaderComponent,
  AppSidebarOrganizerComponent,
  AppSidebarNaveOrganizerComponent,

  APP_SIDEBAR_NAV
} from './components';

 import {ChatNavbarComponent,
  ChatUserListComponent,
  ChatFeedComponent,
  ChatFormComponent
} from './chatfolder'
const APP_COMPONENTS = [
  AppAsideComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarHeaderComponent,
  AppSidebarOrganizerComponent,
  AppSidebarNaveOrganizerComponent,
  
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';
import { loginService} from './views/pages/login/login.service';
import{AutheService } from './views/pages/register/authe.service';

import { Ng2FilterPipeModule } from 'ng2-filter-pipe';


//import { AppSidebarNaveOrganizerComponent } from './components/app-sidebar-nave-organizer/app-sidebar-nave-organizer.component';
// import { AppSidebarOrganizerComponent } from './components/app-sidebar-organizer/app-sidebar-organizer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
// import { FirebaseListObservable} from 'angularfire2/ListObservable';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {appRoutes} from './chatfolder/chat-router/chat.touter.module';
import { environment } from '../environments/environment';
import {ChatService} from './chatfolder/chatservice/chat-servie';
import {GetUserService} from './services/getuser.service'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    //RouterModule.forRoot(appRoutes),
    Ng2FilterPipeModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  declarations: [
    ChatNavbarComponent,
    // // ChatUserListComponent,
    // // ChatFeedComponent,
    // ChatFormComponent,
    AppComponent,
    GetUserComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    
  ],
  providers: [loginService,AutheService,ChatService,AngularFireDatabase,{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }, GetUserService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
