import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	  <index-header [title]='title'></index-header>
	  <div class="bg"> 
	  </div>
	  <div class="rewardDescription">
			奖励说明 >
	  </div>
	  <div class='nav clear'>
		  <p>
		  	<span>
		  	</span>
			<label for="">
				微博好友
			</label>
		  </p>
		  <p>
		 	 <span>
		  	</span>
			<label for="">
				微信好友
			</label>
		  </p>
		  <p>
		  	<span>
		  	</span>
			<label for="">
				qq好友
			</label>
		  </p>
	  </div>
	  <div class="footer">
		您已成功邀请<span>2</span>人，累计获得现金<span>50.0</span>元，<span>1</span>张兑换券
	  </div>
  `,
  styleUrls: ['../css/invitation.component.scss']
})
export class invitationComponent {
	title="邀请好友";
}
