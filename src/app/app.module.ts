import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';
import { RegisterComponent } from './register-and-login/register/register.component';
import { LoginComponent } from './register-and-login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAndLoginComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
