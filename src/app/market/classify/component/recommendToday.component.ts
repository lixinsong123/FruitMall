import { Component } from '@angular/core';

@Component({
  selector: 'recommend-today',
  template:`
	<div class="wrapper clear">
		<div class="titile clear">
				<div class="name">
					<span></span>
					<label>
						今日推荐
					</label>
				</div>
				<div class="more">
					<label>
						查看更多
					</label>
				</div>
		</div>
		<ul class="recommendView clear"> 
			<li *ngFor="let item of recommendFriut;let idx=index" [class.oddRight]="idx%2==0">
				<div class="recommendPic">
					<img [src]='item.imgsrc'/>
				</div>
				<div class="clear forLink">
					<p class="introduce">
						<b>{{item.name}}</b>
						<strong>{{item.price}}</strong>
					</p>
					<span class="sumbit"></span>
				</div>
			</li>
		</ul>
	</div>
  `,
  styleUrls: ['./css/recommendToday.component.scss']
})
export class recommendTodayComponent {
	title="分类";
	//今日推荐数据
	recommendFriut=[{
		id:11,
		imgsrc:'../../../assets/img/market/index/Classfy/friut_one.png',
		name:'新西兰甜枣',
		price:'￥18.00/1盒'
	},
	{
		id:11,
		imgsrc:'../../../assets/img/market/index/Classfy/friut_two.png',
		name:'越南红心火龙果',
		price:'￥38.00/1盒 '
	},
	{
		id:11,
		imgsrc:'../../../assets/img/market/index/Classfy/friut_two.png',
		name:'越南红心火龙果',
		price:'￥38.00/1盒 '
	},
	{
		id:15,
		imgsrc:'../../../assets/img/market/index/Classfy/friut_one.png',
		name:'新西兰甜枣',
		price:'￥18.00/1盒'
	}];

}
