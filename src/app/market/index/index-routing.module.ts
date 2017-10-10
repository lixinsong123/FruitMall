import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//邀请
import {invitationComponent} from './invitation/invitation.component';
import {groupPurchaseComponent} from './groupPurchase/groupPurchase.component';
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
        component:groupPurchaseComponent
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