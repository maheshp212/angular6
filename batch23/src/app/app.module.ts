import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventsComponent } from './events/events.component';
import { FormstatesComponent } from './formstates/formstates.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { AttrDirective } from './attr.directive';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ClassDirective } from './class.directive';

const routes:Routes = [
	{path:'home', component:HomeComponent},
	{path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'events', component:EventsComponent},
  {path:'states', component:FormstatesComponent},
  {path:'pipes', component:PipesComponent},
	{path:'life-cycle', component:LifeCycleComponent},
]; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    EventsComponent,
    FormstatesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    AttrDirective,
    LifeCycleComponent,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
