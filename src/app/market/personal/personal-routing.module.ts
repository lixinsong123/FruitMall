import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {myBalanceComponent} from './myBalance/myBalance.component';
import {myCouponComponent}  from './myCoupon/myCoupon.component';
import {myCollectionComponent} from './myCollection/myCollection.component';

import {deliveryAddressComponent} from './deliveryAddress/deliveryAddress.component';

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
      },
      {
        path:'myCollection',
        component:myCollectionComponent
      },
      {
        path:'deliveryAddress',
        component:deliveryAddressComponent
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