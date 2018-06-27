import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ // components, direcitves , pipes
    AppComponent
  ],
  imports: [ // dependency modules
    BrowserModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
