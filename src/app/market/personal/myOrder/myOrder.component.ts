import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<ul class="menu clear">
		<li [class.active]='menuControlle.Payment' (click)="showMenu('Payment')">待付款</li>
		<li [class.active]='menuControlle.deliverGoods' (click)="showMenu('deliverGoods')" >待发货</li>
		<li [class.active]='menuControlle.goodsReceipt' (click)="showMenu('goodsReceipt')">待收货</li>
		<li [class.active]='menuControlle.evaluate' (click)="showMenu('evaluate')">待评价</li>
	</ul>
	<div class="pendingPayment" *ngIf="menuControlle.Payment">
		<div class="common" *ngFor="let item of paymentData">
			<div class="show clear">
				<img [src]="item.imgUrl" alt="" />
				<div class="link">
					<p class="title">
						{{item.title}}
					</p>
					<p class="content">
						{{item.content}}
					</p>
					<p class="price">
						<span class="today">￥<strong>{{item.priceToday}}</strong></span>
						<span class="origin">￥<b>{{item.priceOrigin}}</b></span>
					</p>
				</div>
			</div>
			<div class="tool clear">
				<span class="pay">
					去支付
				</span>
				<span class="cancellation">
					取消订单
				</span>	
			</div>
		</div>
	</div>
	<div class="pendingDeliverGoods" *ngIf="menuControlle.deliverGoods">
		<div class="common" *ngFor="let item of paymentData">
			<div class="show clear">
				<img [src]="item.imgUrl" alt="" />
				<div class="link">
					<p class="title">
						{{item.title}}
					</p>
					<p class="content">
						{{item.content}}
					</p>
					<p class="price">
						<span class="today">￥<strong>{{item.priceToday}}</strong></span>
						<span class="origin">￥<b>{{item.priceOrigin}}</b></span>
					</p>
				</div>
			</div>
			<div class="tool clear">
					<span>
						取消订单
					</span>
					<span>
						提醒发货
					</span>
					<span>
						联系卖家
					</span>
			</div>
		</div>
	</div>
	<div class="pendingGoodsReceipt" *ngIf="menuControlle.goodsReceipt">
		<div class="common" *ngFor="let item of paymentData">
			<div class="show clear">
				<img [src]="item.imgUrl" alt="" />
				<div class="link">
					<p class="title">
						{{item.title}}
					</p>
					<p class="content">
						{{item.content}}
					</p>
					<p class="price">
						<span class="today">￥<strong>{{item.priceToday}}</strong></span>
						<span class="origin">￥<b>{{item.priceOrigin}}</b></span>
					</p>
				</div>
			</div>
			<div class="tool clear">
					<span class="confirm">
						确认收货
					</span>
					<span>
						批量退款
					</span>
					<span>
						查看物流
					</span>		
			</div>
		</div>
	</div>
	<div class="pendingeValuate" *ngIf="menuControlle.evaluate">
		<div class="common" *ngFor="let item of paymentData">
			<div class="show clear">
				<img [src]="item.imgUrl" alt="" />
				<div class="link">
					<p class="title">
						{{item.title}}
					</p>
					<p class="content">
						{{item.content}}
					</p>
					<p class="price">
						<span class="today">￥<strong>{{item.priceToday}}</strong></span>
						<span class="origin">￥<b>{{item.priceOrigin}}</b></span>
					</p>
				</div>
			</div>
			<div class="tool clear">
					<span class="evaluate">
						评价
					</span>
					<span>
						删除订单
					</span>
					<span>
						开票申请
					</span>		
			</div>
		</div>
	</div>
  `,
  styleUrls: ['../css/myOrder.component.scss']
})
export class myOrderComponent implements OnInit{
	title="我的订单";
	constructor( 
	  private route: ActivatedRoute,
	) {}
	//控制显示那一类别的数据
	menuControlle={
		Payment:true,
		deliverGoods:false,
		goodsReceipt:false,
		evaluate:false
	};
	// 代付款数据
	paymentData=[
		{
			imgUrl:'../../../../assets/img/market/index/Personal/myOrder/friut_one.png',
			title:'意大利绿奇异果3200g/20个',
			content:'享受清爽汁水融进齿间感觉',
			priceToday:'35.9',
			priceOrigin:'55.9',
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/myOrder/friut_two.png',
			title:'黔阳冰糖橙3200g/20个',
			content:'享受清爽汁水融进齿间感觉',
			priceToday:'66.9',
			priceOrigin:'99.9',
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/myOrder/friut_three.png',
			title:'菲律宾龙眼3200g/20个',
			content:'享受清爽汁水融进齿间感觉',
			priceToday:'45.9',
			priceOrigin:'85.9',
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/myOrder/friut_one.png',
			title:'意大利绿奇异果3200g/20个',
			content:'享受清爽汁水融进齿间感觉',
			priceToday:'35.9',
			priceOrigin:'55.9',
		}
	];
	ngOnInit(){
		this.route.params.subscribe(params => {
            console.log(params.id); 
            let id =params.id;
            if(id==undefined){
            	//默认
            }else{
            	 this.showMenu(id);
            }
           
        });
	}
	showMenu(val){
		for(var att in this.menuControlle){
				this.menuControlle[att]=false;
		}
		this.menuControlle[val]=true;
	}
}
