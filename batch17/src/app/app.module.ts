import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { Ng2TableModule } from 'ng2-table/ng2-table';


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
import { NotfoundComponent } from './notfound/notfound.component';
import { ParamsComponent } from './params/params.component';
const routes:Routes = [ 
  {path:'', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'dir', component:DirectivesComponent},
  {path:'states', component:StatesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle', component:LifecycleComponent},
  {path:'api', component:ApisComponent},
  {path:'params/:fname/:uid', component:ParamsComponent},
  {path:'**', component:NotfoundComponent},
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
    ApisComponent,
    NotfoundComponent,
    ParamsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }
