import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';

const routes:Routes = [ 
		{path:'intro', component:IntroComponent},
    {path:'variables', component:VariablesComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'states', component:StatesComponent},
		{path:'pipes', component:PipesComponent},
	]

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    HomeComponent,
    VariablesComponent,
    DirectivesComponent,
    StatesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe
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
