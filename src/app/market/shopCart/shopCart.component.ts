import { Component } from '@angular/core';

@Component({
  templateUrl:'./shopCart.component.html',
  styleUrls: ['../css/shopCart.component.scss']
})
export class shopCartComponent {
	title="购物车";
	//总价钱
	private total=0;
	//控制购物车所有选中状态
	private allSelect=false;

	onVoted(ev){
		this.total=ev;
	}
	onSelect(ev){
		console.log(ev);
		this.allSelect=ev;
	}
}
