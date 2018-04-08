import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modules
import {pagesModule} from './pages/pages.module';

//Routes
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    pagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
