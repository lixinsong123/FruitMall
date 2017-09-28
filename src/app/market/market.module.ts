import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
 

import {MarketRoutingModule} from './market-routing.module';
//首页
import {indexComponent}  from './index/index.component';
//分类
import {classifyComponent} from './classify/classify.component';
//个人
import {personalComponent} from './personal/personal.component';
//购物车
import {shopCartComponent} from './shopCart/shopCart.component';
//bar图移动指令
import {MoveDirective} from './directive/move.directive';
//双向数据绑定模块
import { FormsModule } from '@angular/forms';

import {marKetComponent} from './market.component';
//首页下属组件
import{spikeActivityComponent} from './index/component/spikeActivity.component';
import {newTodayComponent}  from './index/component/newToday.component';
//分类下属组件
import {typeClassifyComponent} from './classify/component/typeClassfy.component'
import {recommendTodayComponent} from './classify/component/recommendToday.component'
//购物车下属组件
import{moneySettlementComponent} from './shopCart/component/moneySettlement.component';
import{shopArticlesComponent}    from './shopCart/component/shopArticles.component';

//复用组件
//头部组件一
import {headOneComponent} from './repeatComponent/headOne.component'


 
@NgModule({
  imports: [
  	FormsModule,
    CommonModule,
    MarketRoutingModule,

  ],
  declarations: [
    marKetComponent,
    indexComponent,
    MoveDirective,
    spikeActivityComponent,
    newTodayComponent,
    classifyComponent,
    typeClassifyComponent,
    recommendTodayComponent,
    headOneComponent,
    personalComponent,
    shopCartComponent,
    moneySettlementComponent,
    shopArticlesComponent
  ]
})
export class MarketModule {}