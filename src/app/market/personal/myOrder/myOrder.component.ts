import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	<personal-header [title]="title"></personal-header>
	<ul class="menu clear">
		<li routerLinkActive="active" [routerLink]="['payment']" >待付款</li>
		<li routerLinkActive="active" [routerLink]="['deliverGoods']" >待发货</li>
		<li routerLinkActive="active" [routerLink]="['goodsReceipt']" >待收货</li>
		<li routerLinkActive="active" [routerLink]="['evaluate']"> 待评价</li>
	</ul>
  	<router-outlet></router-outlet>
	
  `,
  styleUrls: ['../css/myOrder.component.scss']
})
export class myOrderComponent implements OnInit{
	title="我的订单";
	constructor( 
	  private route: ActivatedRoute,private router:Router
	) {}
	// //控制显示那一类别的数据
	// menuControlle={
	// 	payment:true,
	// 	deliverGoods:false,
	// 	goodsReceipt:false,
	// 	evaluate:false
	// };
	ngOnInit(){
		// this.route.params.subscribe(params => {
  //           console.log(params); 
  //           let id =params.id;
  //           if(id==undefined){
  //           	//默认
  //           }else{
  //           	 this.showMenu(id);
  //           }
           
  //       });
	}
	/*
		简单的方法----》routerLinkActive
	*/
	// showMenu(val){
	// 	for(var att in this.menuControlle){
	// 			this.menuControlle[att]=false;
	// 	}
	// 	this.menuControlle[val]=true;
	// 	this.router.navigate([val], { relativeTo: this.route });
	// }
}
