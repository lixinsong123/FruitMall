import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  template:`
		<personal-header [title]="title" [right]="right"></personal-header>
		<div class="address" *ngFor="let item of adressData;let idx =index">
			<div class="linkShow">
				<p class="namePhone">
					<span class="name">{{item.name}}</span>
					<span class="phone">{{item.phone}}</span>
				</p>
				<p class="adress">
					{{item.adress}}
				</p>
			</div>
			<div class="operation clear">
				<span class="setDefault active" [class.active]="item.isDefault" (click)="setDefault(idx)">
					设为默认
				</span>
				<p class="tool">
					<span class="edit">修改</span>
					<span class="delete">删除</span>
				</p>
			</div>
		</div>
  `,
  styleUrls: ['../css/deliveryAddress.component.scss']
})
export class deliveryAddressComponent {
	title="收货地址管理";
	constructor(private router:Router, private route: ActivatedRoute){}
	//收货地址数据
	adressData=[
		{
			name:'霞之丘诗羽',
			phone:'13888888888',
			adress:'重庆九龙坡区石桥铺渝新路260号公寓1栋1202室',
			isDefault:true,
		},
		{
			name:'泽村英梨梨',
			phone:'13988888888',
			adress:'重庆綦江区东溪镇渝新路260号公寓1栋1202室',
			isDefault:false,
		},
		{
			name:'雪之下雪乃',
			phone:'15988888888',
			adress:'重庆渝中区渝新路260号公寓1栋1202室',
			isDefault:false,
		},
	];
	right={
		name:'添加',
		url:'add'
	};
	setDefault(index){
		for(var i=0;i<this.adressData.length;i++){
			this.adressData[i].isDefault=false;
		}
		this.adressData[index].isDefault=true;
	}
	//相对导航函数
	gotoPage(route){
		  //第二种"[routerLink]="[route]"如果我们用RouterLink来代替Router服务进行导航，就要使用相同的链接参数数组，
		  //不过不再需要提供relativeTo属性。 ActivatedRoute已经隐含在了RouterLink指令中。
		  this.router.navigate([route], { relativeTo: this.route });
	}
}
