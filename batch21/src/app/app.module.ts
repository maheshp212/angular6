import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';

@NgModule({
  declarations: [ //components, pipes, directives
    AppComponent, HomeComponent, IntroComponent, VariablesComponent
  ],
  imports: [ // dependency modules
    BrowserModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
