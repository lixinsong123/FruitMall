import { Component,Input} from '@angular/core';

@Component({
  selector: 'personal-header',
  template:`
  		<div class="headParent">
			<div class="currencyHead">
				{{title}}
			</div>
			<div class="bgBack">
				<img src="../../../../assets/img/market/index/back2.png" alt="" />
			</div>
  		</div>	
  `,
  styleUrls: ['../css/myBalance.component.scss']
})
export class personalHeaderComponent {
	@Input() title;
}
