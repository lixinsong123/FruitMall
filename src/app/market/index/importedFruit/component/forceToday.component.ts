import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  selector: 'force-today',
  template:`
  	<div class="parent">
		<h2>今日力推
			<span></span>
		</h2>
		<ul class="slide-box">
	        <li class="slide-item" *ngFor="let item of forceData">
				<img [src]="item.imgSrc" alt="" />
				<p class="name">{{item.name}}</p>
				<p class="piece">已购{{item.piece}}件</p>
	        </li>
    	</ul>
	</div>
  `,
  styleUrls: ['./css/layout.component.scss']
})
export class forceTodayComponent {
	title="进口水果";
	//
	forceData=[
		{
				imgSrc:'../../../../assets/img/market/reallyIndex/skill/force_one.png',
				name:'蜜汁香菠萝',
				piece:'108',
		},
		{
				imgSrc:'../../../../assets/img/market/reallyIndex/skill/force_two.png',
				name:'奇异红毛丹',
				piece:'388',
		},
		{
				imgSrc:'../../../../assets/img/market/reallyIndex/skill/force_three.png',
				name:'初恋三月泡',
				piece:'458',
		},
		{
				imgSrc:'../../../../assets/img/market/reallyIndex/skill/force_one.png',
				name:'蜜汁香菠萝',
				piece:'128',
		},
		{
				imgSrc:'../../../../assets/img/market/reallyIndex/skill/force_one.png',
				name:'蜜汁香菠萝',
				piece:'128',
		},
		{
				imgSrc:'../../../../assets/img/market/reallyIndex/skill/force_one.png',
				name:'蜜汁香菠萝',
				piece:'128',
		},
	];
}
