import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {indexComponent}  from './index/index.component';
import {marKetComponent} from './market.component';
import {classifyComponent} from './classify/classify.component';

import {personalComponent} from './personal/personal.component';
import {shopCartComponent} from './shopCart/shopCart.component';
const marketRoutes: Routes = [
  {
    path: '',
    component: marKetComponent,
    children:[
      {
        path:'index',
        component:indexComponent,
      },
      {
        path:'classify',
        component:classifyComponent,
      },
      {
        path:'personal',
        component:personalComponent
      },
      {
        path:'shopCart',
        component:shopCartComponent
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
export class MarketRoutingModule {}