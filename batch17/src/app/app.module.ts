import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

const routes:Routes = [ 
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
