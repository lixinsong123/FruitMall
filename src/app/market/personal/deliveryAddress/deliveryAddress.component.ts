import { Component } from '@angular/core';

@Component({
  template:`
		<personal-header [title]="title" [right]="right"></personal-header>
		<div class="address">
			<div class="linkShow">
			</div>
			<div class="operation">
			</div>
		</div>
  `,
  styleUrls: ['../css/deliveryAddress.component.scss']
})
export class deliveryAddressComponent {
	title="收货地址管理";
	right={
		name:'添加',
		url:''
	};
}
