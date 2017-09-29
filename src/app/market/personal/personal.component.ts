import { Component } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  templateUrl:'./personal.component.html',
  styleUrls: ['../css/personal.component.scss']
})
export class personalComponent {

	constructor(private router:Router, private route: ActivatedRoute){}
	//相对导航函数
	gotoPage(route){
		  //第二种"[routerLink]="[route]"如果我们用RouterLink来代替Router服务进行导航，就要使用相同的链接参数数组，
		  //不过不再需要提供relativeTo属性。 ActivatedRoute已经隐含在了RouterLink指令中。
		  this.router.navigate([route], { relativeTo: this.route });
	}
}
