import { Component } from '@angular/core';

@Component({
  selector: 'recommend-today',
  template:`
	<div class="wrapper">
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
	</div>
  `,
  styleUrls: ['./css/recommendToday.component.scss']
})
export class recommendTodayComponent {
	title="分类";
}
