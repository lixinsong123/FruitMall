import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {myBalanceComponent} from './myBalance/myBalance.component';
import {myCouponComponent}  from './myCoupon/myCoupon.component';
import {myCollectionComponent} from './myCollection/myCollection.component';

import {deliveryAddressComponent} from './deliveryAddress/deliveryAddress.component';

import {addAddressComponent}  from './deliveryAddress/addAddress.component';
import {setUpComponent} from './setUp/setUp.component';
import {myOrderComponent} from './myOrder/myOrder.component';
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
        path:'setUp',
        component:setUpComponent
      },
      {
         path:'myOrder',
        component:myOrderComponent
      },
      {
         path:'myOrder/:id',
        component:myOrderComponent
      },
      {
        path:'deliveryAddress',
        component:deliveryAddressComponent,
      },
      {
           path:'deliveryAddress/add',
           component:addAddressComponent
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