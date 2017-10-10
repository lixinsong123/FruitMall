import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  template:`
	<div class="pendingGoodsReceipt" >
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
  `,
  styleUrls: ['../../css/myOrder.component.scss']
})
export class goodsReceiptComponent {
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
}
