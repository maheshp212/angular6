import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';

const routes:Routes = [
		{path:'intro', component:IntroComponent},
    {path:'variable', component:VariablesComponent},
    {path:'directives', component:DirectivesComponent},
		{path:'states', component:StatesComponent},
	];


@NgModule({
  declarations: [ //components, pipes, directives
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    StatesComponent
  ],
  imports: [ // dependency modules
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
