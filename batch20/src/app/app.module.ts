import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

/*import {HttpModule} from '@angular/http'*/




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';
import { PipesComponent } from './pipes/pipes.component';
import { AttributeDirective } from './attribute.directive';
import { ClassDirective } from './class.directive';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ApiComponent } from './api/api.component';
import { NotfoundComponent } from './notfound/notfound.component';

const route:Routes = [
  {path:'', component:HomeComponent},
	{path:'intro/:name/:age', component:IntroComponent},
	{path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'states', component:StatesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle', component:LifecycleComponent},
  {path:'api', component:ApiComponent},
	{path:'**', component:NotfoundComponent},
];
@NgModule({
  declarations: [ // componnents , directvies, pipes
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    StatesComponent,
    PipesComponent,
    AttributeDirective,
    ClassDirective,
    HexaPipe,
    ParamsPipe,
    LifecycleComponent,
    ApiComponent,
    NotfoundComponent
  ], 
  imports: [ // dependency modules
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpClientModule
  ],
  providers: [], // serivces
  bootstrap: [AppComponent]
})
export class AppModule { }
