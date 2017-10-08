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

//个人
import {personalComponent} from './personal.component';

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
  deliveryAddressComponent
  ]
})
export class PersonalModule {}