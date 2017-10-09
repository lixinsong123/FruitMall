import { Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'personal-header',
  template:`
  		<div class="headParent">
			<div class="currencyHead">
				{{title}}
			</div>
			<div class="bgBack" (click)="goBack()">
				<img src="../../../../assets/img/market/index/back2.png" alt="" />
			</div>
			
			<div *ngIf="rightContro" class="right" (click)=gotoPage(right.url)>
				{{right.name}}
			</div>

  		</div>	
  `,
  styleUrls: ['../css/myBalance.component.scss']
})
export class personalHeaderComponent implements OnInit{
	@Input() title;

	@Input() right;

	rightContro=false;

	constructor(private router:Router, private route: ActivatedRoute){
	}
	goBack(){
		this.router.navigate(['/personal']);
	}
	ngOnInit(){
		if(this.right){
			this.rightContro=true;
		}else{
			this.rightContro=false;
		}
	}
	//相对导航函数
	gotoPage(route){
		  //第二种"[routerLink]="[route]"如果我们用RouterLink来代替Router服务进行导航，就要使用相同的链接参数数组，
		  //不过不再需要提供relativeTo属性。 ActivatedRoute已经隐含在了RouterLink指令中。
		  this.router.navigate([route], { relativeTo: this.route });
	}
}
