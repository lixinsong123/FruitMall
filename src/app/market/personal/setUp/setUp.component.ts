import { Component } from '@angular/core';

@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<div class="information clear">
		<h2>我的头像</h2>
		<p class="show clear">
			<span class="headPortrait">
				<img [src]="user.imgUrl" alt="" />
			</span>
		</p>
	</div>
	<div class="information clear">
		<h2>昵称</h2>
		<p class="show clear">
			<span class="currency">
				{{user.name}}
			</span>
		</p>
	</div>
	<div class="information clear">
		<h2>账户与安全</h2>
		<p class="show clear">
			<span class="currency">
				{{user.sex}}
			</span>
		</p>
	</div>
	<div class="information clear">
		<h2>清楚缓存</h2>
		<p class="show clear">
			<span class="currency">
				
			</span>
		</p>
	</div>
	<div class="footer">
		<span class="btn">退出登录</span>
	</div>
  `,
  styleUrls: ['../css/setUp.component.scss']
})
export class setUpComponent {
	title="个人设置";
	// 用户数据
	user={
		name:'追逐繁星的孩子',
		sex:'男',
		imgUrl:'../../../../assets/img/market/index/Personal/head_one.jpg'
	};
}
