import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 

import {personalRoutingModule} from './personal-routing.module';
//个人余额模块
import {myBalanceComponent} from './myBalance/myBalance.component';

//个人优惠券模块
import {myCouponComponent}  from './myCoupon/myCoupon.component';
//个人收藏模块
import {myCollectionComponent} from './myCollection/myCollection.component';
//个人收货地址管理模块
import {deliveryAddressComponent} from './deliveryAddress/deliveryAddress.component';
import {addAddressComponent}  from './deliveryAddress/addAddress.component';
//个人设置模块
import {setUpComponent} from './setUp/setUp.component';
//个人
import {personalComponent} from './personal.component';
//个人订单模块
import {myOrderComponent} from './myOrder/myOrder.component';
import {payMentComponent} from './myOrder/component/Payment.component';
import {evaluateComponent} from './myOrder/component/evaluate.component';
import {deliverGoodsComponent} from './myOrder/component/DeliverGoods.component';
import {goodsReceiptComponent} from './myOrder/component/GoodsReceipt.component';
//通用组件
import {personalHeaderComponent} from './component/header.component';

 
@NgModule({
  imports: [
    CommonModule,
    personalRoutingModule,
  ],
  declarations: [
  personalComponent,
  personalHeaderComponent,
  myBalanceComponent,
  myCouponComponent,
  myCollectionComponent,
  deliveryAddressComponent,
  addAddressComponent,
  setUpComponent,
  myOrderComponent,
  payMentComponent,
  evaluateComponent,
  deliverGoodsComponent,
  goodsReceiptComponent
  ]
})
export class PersonalModule {}