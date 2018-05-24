import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ApisComponent } from './apis/apis.component';

const routes:Routes = [ 
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'dir', component:DirectivesComponent},
  {path:'states', component:StatesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle', component:LifecycleComponent},
  {path:'api', component:ApisComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    DirectivesComponent,
    StatesComponent,
    AttrDirective,
    ClassDirective,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    LifecycleComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }
