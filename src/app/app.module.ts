import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { from } from 'rxjs';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServicesComponent } from './services/services.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
/*import { from } from 'rxjs';*/

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    //ServicesComponent,
    ServersComponent,
    //WarningAlertComponent,
    //SuccessAlertComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
