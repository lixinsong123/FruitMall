import { Component } from '@angular/core';

@Component({
  template: `<personal-header [title]="title"></personal-header>
		<div class="information clear">
			<label>收件人:</label>
			<input type="text"/>
		</div>
		<div class="information clear">
			<label>联系电话:</label>
			<input type="text"/>
		</div>
		<div class="information clear">
			<label>所在地区:</label>
			<input type="text"/>
		</div>
		<div class="information clear">
			<label>详细地址:</label>
			<input type="text"/>
		</div>
		<div class="sumbit">
			<span>保存并使用</span>
		</div>
  `,
  styleUrls: ['./addAddress.component.scss']
})
export class addAddressComponent {
  title = '添加地址';
}
