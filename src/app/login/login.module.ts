import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 
import { FormsModule } from '@angular/forms';
 import {loginComponent}  from './login.component';
 import {registerComponent} from './register/register.component';
import { AdminRoutingModule }       from './login-routing.module';
 
@NgModule({
  imports: [
  	FormsModule,
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    loginComponent,
    registerComponent
    
  ]
})
export class AdminModule {}