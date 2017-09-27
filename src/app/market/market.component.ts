import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
@Component({
  template:`
  <router-outlet></router-outlet>
	<footer>
		<ul class="par">
			<li>
				<a class="forIndex" routerLink="/index" routerLinkActive="active">
					首页	
				</a>								
			</li>
			<li>
				 <a class="forClassify" routerLink="/classify" routerLinkActive="active">	
					分类
				</a>
			</li>
			<li>
				 <a class="forShopCart" routerLink="/shopCart" routerLinkActive="active">
					购物车
				</a>
			</li>
			<li>
				 <a class="forPersonal" routerLink="/personal" routerLinkActive="active"> 
					个人
				</a>
			</li>
		</ul>
	</footer>
  `,
  styleUrls: ['./css/marketl.component.scss']
})
export class marKetComponent  {
	// constructor( 
 //  		private route: ActivatedRoute,
 // 		 private location: Location){}
	// ngOnInit(){
	// 	this.route.paramMap
 //   	 .switchMap((params: ParamMap) => params.get('id'))
 //   	 .subscribe(general => alert(general));
	// }
}
