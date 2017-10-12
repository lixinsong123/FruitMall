import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	  <index-header [title]='title'></index-header>
	  <section class="nav">
			<ul class="clear">
				<li>	
					<span></span>
					<label for="">美国</label>
				</li>
				<li>
					<span></span>
					<label for="">新西兰</label>
				</li>
				<li class="active">
					<span></span>
					<label for="">英国</label>
				</li>
				<li>
					<span></span>
					<label for="">越南</label>
				</li>
				<li class="end">
					<span></span>
					<label for="">菲律宾</label>
				</li>
			</ul>
	  </section>
	  <div class="divsion">
	  </div>
	  <force-today></force-today>
	  <div class="newGoods clear">
			<div style="border-right:1px solid #eee">
				<p class="title" style="color:#fd6446">今日上新</p>
				<p class="name">章姬奶草莓</p>
				<span></span>
			</div>
			<div>
				<p class="title" style="color:#fa477d">有鲜货</p>
				<p class="name">高颜值美果</p>
				<span></span>
			</div>
	  </div>
	  <div class="common clear" *ngFor="let itam of seckillData">
				<img class="picShow" [src]="itam.imgUrl" alt="" />
				<div class="content">
					<p class="name">{{itam.name}}</p>
					<p class="link">{{itam.link}}</p>
					<p class="price">
						<span class="tod">￥{{itam.tod}}</span>
						<span class="ori">￥{{itam.ori}}</span>
					</p>
					<div class="operation clear">
						
						<p class="btn">

						</p>
					</div>
	  			</div>
	  		</div>
  `,
  styleUrls: ['../css/importedFruit.component.scss']
})
export class importedFruitComponent {
	title="进口水果";
	// 数据
	seckillData=[
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_one.png',
			name:'意大利绿奇异果3200g/20个',
			link:'享受清爽汁水融进齿间感觉',
			tod:35.9,
			ori:55.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_two.png',
			name:'黔阳冰糖橙3200g/20个',
			link:'享受清爽汁水融进齿间感觉',
			tod:55.9,
			ori:75.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_three.png',
			name:'菲律宾龙眼3200g/20个',
			link:'享受清爽汁水融进齿间感觉',
			tod:89.9,
			ori:100.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
		{
			imgUrl:'../../../../assets/img/market/index/Personal/collection/friut_four.png',
			name:'秦岭软柿子3200g/10个',
			link:'享受清爽汁水融进齿间感觉',
			tod:56.9,
			ori:579.9,
		},
	];
}
