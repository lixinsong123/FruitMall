import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	  <index-header [title]='title'></index-header>
	  <ul class="menu clear">
		 <li routerLinkActive="active" [routerLink]="['hotSell']">热卖</li>
		 <li>推荐</li>
		 <li>今日爆款</li>
		 <li>新品上架</li>
		 <li>时令水果</li> 
	  </ul>
	  <div class="routerPar">
	  	<router-outlet></router-outlet>
	  </div>
  `,
  styleUrls: ['../css/groupPurchase.component.scss']
})
export class groupPurchaseComponent {
	title="团购";
}
