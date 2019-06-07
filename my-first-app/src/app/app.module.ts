import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import {FormsModule} from "@angular/forms";
import { Practice2Component } from './practice2/practice2.component';
import { Practice1Component } from "./practice1/practice1.component";
import { PracticeDirectiveComponent } from "./practice-directive/practice-directive.component";

//Informa ao angular os componentes que devem ser usados nessa Model
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    Practice2Component,
    Practice1Component,
    PracticeDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
