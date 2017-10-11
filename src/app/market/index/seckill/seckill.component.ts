import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	  <index-header [title]='title'></index-header>
  `,
  styleUrls: ['../css/invitation.component.scss']
})
export class seckillComponent {
	title="秒杀";
}
