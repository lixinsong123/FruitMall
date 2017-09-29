import { Component } from '@angular/core';

@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<div class="core">
		<div class="layout">
			<div class="par clear">
				<p class="name">
					满 减 券
				</p>
				<p class="money">
					￥<strong>80</strong>
				</p>
			</div>
		</div>
	</div>
  `,
  styleUrls: ['../css/myCoupon.component.scss']
})
export class myCouponComponent {
	title="我的优惠券";
}
