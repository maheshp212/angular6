import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
//import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectivesComponent } from './directives/directives.component';
import { StatesComponent } from './states/states.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { TemplDirective } from './templ.directive';
import { OutputComponent } from './output/output.component';
import { ObjformComponent } from './objform/objform.component';
import { LifeCyclesComponent } from './life-cycles/life-cycles.component';
import { ApisComponent } from './apis/apis.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes:Routes = [
    {path:'', component:HomeComponent},
	{path:'intro/:age/:gender', component:IntroComponent},
    {path:'variable', component:VariablesComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'states', component:StatesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'obj-forms', component:ObjformComponent},
    {path:'life-cycle', component:LifeCyclesComponent},
    {path:'apis', component:ApisComponent},
	{path:'**', component:NotfoundComponent},
	];


@NgModule({
  declarations: [ //components, pipes, directives
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectivesComponent,
    StatesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    AttrDirective,
    ClassDirective,
    TemplDirective,
    OutputComponent,
    ObjformComponent,
    LifeCyclesComponent,
    ApisComponent,
    NotfoundComponent
  ],
  imports: [ // dependency modules
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
