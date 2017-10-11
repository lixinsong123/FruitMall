import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	
	 <div class="common" *ngFor="let item of hotSellData">
		<div class="picBg">
			<img [src]="item.imgUrl" alt="" />
		</div>
		<div class="information">
			<p class='name'>{{item.name}}</p>
			<p class="introduce">{{item.introduce}}</p>
			<div class="footer clear">
				<p class="many clear">
					<span></span>
					<label for="">{{item.peoples}}人团</label>
				</p>
				<span class='btn' (click)="goDeatil(item)">
					去开团
				</span>
				<p class="price clear">
					<span class="reality">￥{{item.reality}}</span>
					<span class="origin">￥{{item.origin}}</span>
				</p>
			</div>
		</div>
	 </div>
  `,
  styleUrls: ['./css/hotSell.component.scss']
})
export class hotSellComponent {
	//热卖数据
	hotSellData=[
		{
			imgUrl:'../../../../../assets/img/market/reallyIndex/hotsell/friut_one.png',
			name:'意大利绿奇异果3200g/20个',
			introduce:'享受清爽汁水融进齿间感觉',
			peoples:2,
			reality:35.9,
			origin:55.9,
			id:'1'
		},
		{
			imgUrl:'../../../../../assets/img/market/reallyIndex/hotsell/friut_two.png',
			name:'湖南黔阳冰糖橙3200g/20个',
			introduce:'享受清爽汁水融进齿间感觉',
			peoples:4,
			reality:45.9,
			origin:75.9,
			id:'2'
		},
		{
			imgUrl:'../../../../../assets/img/market/reallyIndex/hotsell/friut_two.png',
			name:'湖南黔阳冰糖橙3200g/20个',
			introduce:'享受清爽汁水融进齿间感觉',
			peoples:4,
			reality:45.9,
			origin:75.9,
			id:'2'
		},
		{
			imgUrl:'../../../../../assets/img/market/reallyIndex/hotsell/friut_one.png',
			name:'湖南黔阳冰糖橙3200g/20个',
			introduce:'享受清爽汁水融进齿间感觉',
			peoples:4,
			reality:45.9,
			origin:75.9,
			id:'1'
		},
	];
	constructor(private router:Router){};
	goDeatil(item){
		this.router.navigate(['index/groupPurchaseDetails', item.id],{ queryParams: { ceshi: 1 } });
	}
}
