import { Component } from '@angular/core';

@Component({
  selector: 'new-today',
  template:`
	<div class="newDayWrapper">
		<ul class="clear">
			<li class="one">
				<p>
					<strong>今日上新</strong>
					<span>章姬奶草莓</span>
				</p>
			</li>
			<li class="one">
				<p >
					<strong style="color:#fa477d">有鲜货</strong>
					<span>高颜值美果</span>
				</p>
			</li>
			<li class="two">
				<p >
					<strong >巴拉拉</strong>
					<span>舒滑润口</span>
				</p>
			</li>
			<li class="two">
				<p >
					<strong >橘仙到了</strong>
					<span>蜜汁冰糖橘</span>
				</p>
			</li>
		</ul>
	</div>
  `,
  styleUrls: ['./css/newToday.component.scss']
})
export class newTodayComponent {
  title = 'app';
}
