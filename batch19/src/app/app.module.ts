import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';

const routes:Routes = [ 
	{path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
	{path:'directives', component:DirectiveComponent},
]

@NgModule({
  declarations: [ // components, direcitves , pipes
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectiveComponent

  ],
  imports: [ // dependency modules
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
