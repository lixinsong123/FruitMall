# MyFuilt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## 登录账户
账户123456
密码123456

## 完成了登录<->注册->首页<->分类

完成了登录页面，注册页面，首页页面，分类页面。
各页面的路由可自由跳转。

## test包

是已经打包好的项目，可直接放入服务器中运行

## 分类页面布局完成。
布局分为 头部组件和分类组件和今日推荐组件。以后可能需要其他内容，用组件的方式插入。

## 购物车页面布局完成，部分功能已实现。
页面分为 头部组件 物品组件  结算组件   组件交互部分完成。结算--全选--数量增加/减少功能实现

## 个人页面布局完成
静态界面布局。没有使用组件。

## 把个人重构为一个模块(Module)-->有自己的路由模块(routing.module)。其他3个后面也会重构为模块。
个人下有许多的子页面，为模块后，方便管理和书写。
下属的-->我的余额组件完成--->建立一个通用的头部组件

## 我的优惠券，我的收藏页面前端页面完成。

## 个人设置页面。

收货地址管理和添加地址页面完成且路由配置完成。

## 我的订单页面完成

代付款-代发货-待收货-待评价。目前是在myOrder组件中的通过一个变量配合*ngIf控制.（改用子路由配置）
个人-》我的订单跳转相关路由完成 

## 我的订单页面重构完成

重构为根据路由导航内容,优化了导航
<ul class="menu clear">
	<li routerLinkActive="active" [routerLink]="['payment']" >待付款</li>
	<li routerLinkActive="active" [routerLink]="['deliverGoods']" >待发货</li>
	<li routerLinkActive="active" [routerLink]="['goodsReceipt']" >待收货</li>
	<li routerLinkActive="active" [routerLink]="['evaluate']"> 待评价</li>
</ul>
<router-outlet></router-outlet>

## 开始做首页下的子模块
  
邀请页面已完成。首页使用了子路由导航。把首页重构为了一个Module

## 首页模块下的团购模块部分完成。(有psd的都做了)

团购模块--》路由跳转--》相关交互完成。

	
