import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {myBalanceComponent} from './myBalance/myBalance.component';
import {myCouponComponent}  from './myCoupon/myCoupon.component';

const marketRoutes: Routes = [
  {
    path: 'personal',
    children:[
      {
        path:'myBalance',
        component:myBalanceComponent
      },
      {
        path:'myCoupon',
        component:myCouponComponent
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(marketRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class personalRoutingModule {}