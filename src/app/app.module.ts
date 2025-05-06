import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; // don't forget this!
import { RouterModule } from '@angular/router'; 
import { appRoutes } from './app.routes'; // Import your routing configuration

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent // also declare SignupComponent!
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Configure the routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
