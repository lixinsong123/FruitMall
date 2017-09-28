import { Component,Input,EventEmitter,Output,OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'money-settlement',
  template:`
		<div class="moneyWrapper clear">
			<div class="view state" [class.active]="isSelect" (click)="onSelect()">
				全选
			</div>
			<div class="view moneyTotal">
				<p>合计: <b>￥</b>
					<strong>{{_total}}</strong>
				</p>
			</div>
			<div class="controller">
				去结算
			</div>
		</div>
  `,
  styleUrls: ['./css/moneySettlement.component.scss']
})
export class moneySettlementComponent{
	//金钱总数
	@Input() _total;
	@Output() onVoted = new EventEmitter<boolean>();
	
	title="分类";
	//是否选中的控制器
	private isSelect=false;
	
	//点击后触发的函数
	onSelect(){
		this.isSelect=this.isSelect?false:true;
		this.onVoted.emit(this.isSelect);
	}
}
