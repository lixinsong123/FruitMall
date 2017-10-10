import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	  <index-header [title]='title'></index-header>
  `,
  styleUrls: ['../css/groupPurchase.component.scss']
})
export class groupPurchaseComponent {
	title="团购";
}
