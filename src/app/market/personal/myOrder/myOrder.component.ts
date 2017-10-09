import { Component } from '@angular/core';

@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<ul class="menu clear">
		<li class="active">待付款</li>
		<li>待发货</li>
		<li>待收货</li>
		<li>待评价</li>
	</ul>
	<div class="pendingPayment">
		<div class="common">
			<div class="show clear">
				<img src="../../../../assets/img/market/index/Personal/myOrder/friut_one.png" alt="" />
				<div class="link">
					<p class="title">
						意大利绿奇异果3200g/20个
					</p>
					<p class="content">
						享受清爽汁水融进齿间感觉
					</p>
					<p class="price">
						<span class="today">￥<strong>35.9</strong></span>
						<span class="origin">￥<b>55.9</b></span>
					</p>
				</div>
			</div>
			<div class="tool">

			</div>
		</div>
	</div>
  `,
  styleUrls: ['../css/myOrder.component.scss']
})
export class myOrderComponent {
	title="我的订单";
}
