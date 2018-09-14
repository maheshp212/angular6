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
import { FormStatesComponent } from './form-states/form-states.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';

const routes:Routes = [
	{path:'intro',component:IntroComponent},
  {path:'variable',component:VariablesComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'events',component:EventsComponent},
  {path:'form-states',component:FormStatesComponent},
	{path:'pipes',component:PipesComponent},
] 
 // components , directives, pipes
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    EventsComponent,
    FormStatesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe
  ],
  imports: [ // dependency modules / 3rd party modules
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
