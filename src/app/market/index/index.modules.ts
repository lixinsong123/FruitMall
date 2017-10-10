import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 

import {indexRoutingModule} from './index-routing.module';
//邀请
import {invitationComponent} from './invitation/invitation.component';
//团购
import {groupPurchaseComponent} from './groupPurchase/groupPurchase.component'; 
 import {indexHeaderComponent} from './component/header.component'
@NgModule({
  imports: [
    CommonModule,
    indexRoutingModule,
  ],
  declarations: [ 
  indexHeaderComponent, 
   invitationComponent,
   groupPurchaseComponent
  ]
})
export class IndexModule {}