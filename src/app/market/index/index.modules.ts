import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 

import {indexRoutingModule} from './index-routing.module';
//邀请
import {invitationComponent} from './invitation/invitation.component';
//团购
import {groupPurchaseComponent} from './groupPurchase/groupPurchase.component'; 
import {hotSellComponent} from "./groupPurchase/component/hotSell.component";
 import {indexHeaderComponent} from './component/header.component'
 import {groupPurchaseDetailsComponent} from './groupPurchase/groupPurchaseDetails.component';
//秒杀
import {seckillComponent} from './seckill/seckill.component';
 //弹出层移动指令
import {EjectDirective} from '../directive/eject.directive';
@NgModule({
  imports: [
    CommonModule,
    indexRoutingModule,
  ],
  declarations: [ 
  indexHeaderComponent, 
   invitationComponent,
   groupPurchaseComponent,
   hotSellComponent,
   groupPurchaseDetailsComponent,
   EjectDirective,
   seckillComponent
  ]
})
export class IndexModule {}