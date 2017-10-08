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
			
			<div *ngIf="rightContro" class="right" >
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
}
