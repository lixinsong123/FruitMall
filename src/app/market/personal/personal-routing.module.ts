import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {myBalanceComponent} from './myBalance/myBalance.component';
import {myCouponComponent}  from './myCoupon/myCoupon.component';
import {myCollectionComponent} from './myCollection/myCollection.component';

import {deliveryAddressComponent} from './deliveryAddress/deliveryAddress.component';

import {addAddressComponent}  from './deliveryAddress/addAddress.component';
import {setUpComponent} from './setUp/setUp.component';
import {myOrderComponent} from './myOrder/myOrder.component';


import {payMentComponent} from './myOrder/component/Payment.component';
import {evaluateComponent} from './myOrder/component/evaluate.component';
import {deliverGoodsComponent} from './myOrder/component/DeliverGoods.component';
import {goodsReceiptComponent} from './myOrder/component/GoodsReceipt.component';
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
        component:myOrderComponent,
        children:[
          {
            path:'',
            component:payMentComponent
          },
          {
            path:'payment',
            component:payMentComponent
          },
          {
            path:'evaluate',
            component:evaluateComponent
          },
          {
            path:'deliverGoods',
            component:deliverGoodsComponent
          },
          {
             path:'goodsReceipt',
             component:goodsReceiptComponent
          }
        ]
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