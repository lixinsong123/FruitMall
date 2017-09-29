import { Component } from '@angular/core';

@Component({
  template:`
		<personal-header [title]="title"></personal-header>
		<div class="core">
			<div class="picLink">
				<img src="../../../../assets/img/market/index/Personal/myBalancePic.png" alt="" />
			</div>
			<p class="moneyTilte">我的余额</p>
			<p class="specificMoney">￥<strong>163.86</strong></p>
			<div class=" laout">
					<strong class="recharge">充值</strong>
			</div>
			<div class="withdrawals laout">
					<strong class="withdrawals">提现</strong>
			</div>
		</div>
  `,
  styleUrls: ['../css/myBalance.component.scss']
})
export class myBalanceComponent {
	title="我的余额"
}
