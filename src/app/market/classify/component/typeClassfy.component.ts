import { Component } from '@angular/core';

@Component({
  selector: 'type-classify',
  template:`
	<div class="wrapper">
		<ul class="clear">
			<li class="one">
				<strong>推荐类</strong>
				<b>热卖、上新、优惠等</b>
			</li>
			<li class="one">
				<strong>浆果类</strong>
				<b>草莓、蓝莓、黑莓等</b>
			</li>
			<li class='three'>
				<strong>柑橘类</strong>
				<b>蜜橘、砂糖橘等</b>
			</li>
			<li class='two'>
				<strong>核果类</strong>
				<b>李子、樱桃、梅子等</b>
			</li>
			<li class='two'>
				<strong>瓜类</strong>
				<b>西瓜、美人瓜、瓜等</b>
			</li>
			<li>
				<strong>仁果类</strong>
				<b>国光、秦冠、李等</b>
			</li>
		</ul>
	</div>
  `,
  styleUrls: ['./css/typeClassfy.component.scss']
})
export class typeClassifyComponent {
	title="分类";
}
