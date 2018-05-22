import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';
import { AttrDirective } from './attr.directive';

const routes:Routes = [ 
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'dir', component:DirectivesComponent},
  {path:'states', component:StatesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    DirectivesComponent,
    StatesComponent,
    AttrDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }
