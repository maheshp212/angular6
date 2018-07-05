import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VariablesComponent } from './variables/variables.component';
import { DirectiveComponent } from './directive/directive.component';
import { StatesComponent } from './states/states.component';
import { PipeComponent } from './pipe/pipe.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { LifeCyclesComponent } from './life-cycles/life-cycles.component';

const routes:Routes = [ 
	{path:'intro', component:IntroComponent},
  {path:'variables', component:VariablesComponent},
  {path:'directives', component:DirectiveComponent},
  {path:'states', component:StatesComponent},
  {path:'pipes', component:PipeComponent},
  {path:'obj-forms', component:ObjFormsComponent},
	{path:'life-cycles', component:LifeCyclesComponent},
]

@NgModule({
  declarations: [ // components, direcitves , pipes
    AppComponent,
    HomeComponent,
    IntroComponent,
    VariablesComponent,
    DirectiveComponent,
    StatesComponent,
    PipeComponent,
    HexaPipe,
    ParamsPipe,
    AttrDirective,
    ClassDirective,
    ObjFormsComponent,
    LifeCyclesComponent

  ],
  imports: [ // dependency modules
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
