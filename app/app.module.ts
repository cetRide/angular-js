import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './authentication/login/login/login.component';
import { SignupComponent } from './authentication/signup/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
