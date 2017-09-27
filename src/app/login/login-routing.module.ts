import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import {loginComponent}  from './login.component';
import {registerComponent} from './register/register.component';

const adminRoutes: Routes = [
  //登录
  {
    path: 'login',
    component: loginComponent,
  },
  //注册
  {
    path: 'register',
    component: registerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}