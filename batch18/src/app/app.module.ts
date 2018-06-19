import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
/*import {HttpModule} from '@angular/http';*/
import {HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { ObjformsComponent } from './objforms/objforms.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { ApisComponent } from './apis/apis.component';

const routes:Routes = [ 
		{path:'intro', component:IntroComponent},
    {path:'variables', component:VariablesComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'states', component:StatesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'obj-forms', component:ObjformsComponent},
    {path:'life-cycle', component:LifeCycleComponent},
		{path:'api', component:ApisComponent},
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
    ParamsPipe,
    ObjformsComponent,
    LifeCycleComponent,
    AttrDirective,
    ClassDirective,
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
export class AppModule { }
