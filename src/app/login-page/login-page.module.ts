import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule
  ],

  exports: [ LoginComponent]


})
export class LoginPageModule { }
