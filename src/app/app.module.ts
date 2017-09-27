import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//登录模块
import {AdminModule} from './login/login.module';
//首页模块
import {MarketModule} from './market/market.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {PageNotFoundComponent} from './not-found.component';
//通用路由
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MarketModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
