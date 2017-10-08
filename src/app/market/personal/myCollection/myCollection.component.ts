import { Component } from '@angular/core';

@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<div class="classIfication clear">
		<p class="collected" [class.active]="ificationIsClick" (click)="ificationControl(1)">已收藏（4）</p>
		<p class="beOverdue" [class.active]="!ificationIsClick" (click)="ificationControl(2)" >已过期（1）</p>
	</div>
	<div class="specificItem clear" *ngFor="let item of showData">
		<div class="picShow">
			<img [src]="item.imgUrl" alt="" />
		</div>
		<div class="linkShow">
			<p  class='name'>
				{{item.name}}
			</p>
			<p class="describe">
				{{item.describe}}
			</p>
			<p class="labelLink clear" >
				<span *ngFor="let son of item.labelLink">{{son}}</span>
			</p>
			<p class="priceBtn">
				￥<strong>{{item.presentPrice}}</strong>
				<span class="originalPrice">￥<b>{{item.originalPrice}}</b></span>
				<span class="btn">
					<img src="../../../../assets/img/market/index/Personal/collection/sunbtn.png" alt="" />
				</span>
			</p>
		</div>
	</div>
  `,
  styleUrls: ['../css/myCollection.component.scss']
})
export class myCollectionComponent {
	title="我的收藏";

	ificationIsClick=true;
	showData=[
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_one.png',
			name:'意大利绿奇异果3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份','今日特价'],
			presentPrice:35.9,
			originalPrice:55.9
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_two.png',
			name:'黔阳冰糖橙3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份'],
			presentPrice:45.9,
			originalPrice:65.9
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_three.png',
			name:'黔阳冰糖橙3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份'],
			presentPrice:45.9,
			originalPrice:65.9
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'黔阳冰糖橙3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份'],
			presentPrice:45.9,
			originalPrice:65.9
		}
	];
	collectedData=[
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_one.png',
			name:'意大利绿奇异果3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份','今日特价'],
			presentPrice:35.9,
			originalPrice:55.9
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_two.png',
			name:'黔阳冰糖橙3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份'],
			presentPrice:45.9,
			originalPrice:65.9
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_three.png',
			name:'黔阳冰糖橙3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份'],
			presentPrice:45.9,
			originalPrice:65.9
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'黔阳冰糖橙3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份'],
			presentPrice:45.9,
			originalPrice:65.9
		}
	];
	beOverdueData=[
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'意大利绿奇异果3200g/20个',
			describe:'享受清爽汁水融进齿间感觉',
			labelLink:['限每人2份','今日特价'],
			presentPrice:35.9,
			originalPrice:55.9
		},
	];

	//处理收藏和过期的方法。
	ificationControl(index){

		this.ificationIsClick=!this.ificationIsClick;

		if(index==1){
			this.showData=this.collectedData;
		}else{
			this.showData=this.beOverdueData;
		}
	}
}
