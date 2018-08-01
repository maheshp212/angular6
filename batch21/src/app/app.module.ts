import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';

const routes:Routes = [
		{path:'intro', component:IntroComponent},
		{path:'variable', component:VariablesComponent},
	];


@NgModule({
  declarations: [ //components, pipes, directives
    AppComponent, HomeComponent, IntroComponent, VariablesComponent
  ],
  imports: [ // dependency modules
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
