import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//邀请
import {invitationComponent} from './invitation/invitation.component';
import {groupPurchaseComponent} from './groupPurchase/groupPurchase.component';

import {hotSellComponent} from "./groupPurchase/component/hotSell.component";

import {groupPurchaseDetailsComponent} from './groupPurchase/groupPurchaseDetails.component';
import {seckillComponent} from './seckill/seckill.component';
import {importedFruitComponent} from './importedFruit/importedFruit.component';
const marketRoutes: Routes = [
  {
    path: 'index',
    children:[
      {
        path:'invitation',
        component:invitationComponent
      },
      {
        path:'groupPurchase',
        component:groupPurchaseComponent,
        children:[
          {
            path:'hotSell',
            component:hotSellComponent
          }
        ]
      },
      {
        path:"groupPurchaseDetails/:id",
        component:groupPurchaseDetailsComponent,
      },
      {
        path:"seckill",
        component:seckillComponent,
      },
      {
        path:'importFruit',
        component:importedFruitComponent
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
export class indexRoutingModule {}