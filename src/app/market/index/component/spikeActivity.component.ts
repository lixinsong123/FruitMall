import { Component } from '@angular/core';

@Component({
  selector: 'spike-activity',
  template:`
		<div class="spikeActivity">
			<div class="titile clear">
				<div class="name">
					<span></span>
					<label>
						秒杀活动
					</label>
				</div>
				<div class="more">
					<label>
						查看更多
					</label>
				</div>
			</div>
			<ul class="core clear">
				<li>
					<p>
						<label>猕猴桃</label>
					</p>
					<span>￥13.00/盒</span>
				</li>
				<li>
					<p>
						<label>葡萄柚</label>
					</p>
					<span>￥11.90/盒</span>
				</li>
				<li>
					<p>
						<label>草莓</label>
					</p>
					<span>￥8.90/盒</span>
				</li>
			</ul>
		</div>
  `,
  styleUrls: ['./css/spikeActivityComponent.component.scss']
})
export class spikeActivityComponent {
  title = 'app';
}
