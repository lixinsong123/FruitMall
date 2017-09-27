import { Component,Input} from '@angular/core';

@Component({
  selector: 'head-one',
  template:`
  <div class="header clear">
	<span>
		<b></b>
	</span>
	<span>
		<strong>
			{{title}}
		</strong>
	</span>
	<span>
		<b></b>
	</span>
</div>`,
  styleUrls: ['./headOne.component.scss']
})
export class headOneComponent {
	@Input() title:string;
}
