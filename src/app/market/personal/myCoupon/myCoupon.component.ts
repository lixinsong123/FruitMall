import { Component } from '@angular/core';

@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<div class="core">
		<div class="layout" *ngFor="let item of couponData">
			<div class="par clear">
				<p class="name">
					{{item.name}}
				</p>
				<p class="money">
					￥<strong>{{item.money}}</strong>
				</p>
				<div class="specificLink">
					<p class="introduce">每日鲜丰{{item.introduce}}元优惠券</p>
					<p class="condition">订单满{{item.condition}}元可用</p>
					<p class="effectiveTime">有效期至：{{item.effectiveTime}}</p>
				</div>
			</div>
		</div>
	</div>
  `,
  styleUrls: ['../css/myCoupon.component.scss']
})
export class myCouponComponent {
	title="我的优惠券";
	//优惠券数据
	couponData=[
		{
			name:'满减券',
			money:80,
			introduce:80,
			condition:99,
			effectiveTime:'2017-02-24'
		},
		{
			name:'满减券',
			money:100,
			introduce:100,
			condition:120,
			effectiveTime:'2017-02-24'
		},
	];
}
