import { Component,Input,EventEmitter,Output,OnChanges,SimpleChange } from '@angular/core';

@Component({
  selector: 'shop-articles',
  template:`
		<ul>
			<li class="clear" *ngFor="let item of data;let idx =index">	
				<div class="button" [class.active]="item.isSelect" (click)="onSelect(idx)" >
					
				</div>
				<div class="picView">
					<img [src]="item.imgSrc" />
				</div>
				<div class="contentView">
					<p class="title">{{item.title}}</p>
					<p class="link">{{item.link}}</p>
					<p class="label">
						<label *ngFor="let son of item.label">{{son.sonLabel}}</label>
					</p>
					<p class="originalPrice" *ngIf="item.originalPrice==''">原价￥<b>{{item.originalPrice}}</b ></p>
					<p class="actualPrice">会员价￥<strong>{{item.actualPrice}}</strong></p>
					<div class="numController clear">
						<span class="reduce" (click)="numReduce(idx)"></span>
						<span class="num">{{item.num}}</span>
						<span class="add" (click)="numAdd(idx)"></span>
					</div>
				</div>
			</li>

		</ul>
  `,
  styleUrls: ['./css/shopArticles.component.scss']
})
export class shopArticlesComponent implements OnChanges {
 	//购物车物品数据
	data=[
		{
			//是否选中
			isSelect:false,
			//图片路径
			imgSrc:'../../../../assets/img/market/index/shopCart/shopPic_one.png',
			//标题
			title:'越南红心火龙果5斤',
			//信息
			link:'享受清爽汁水融进齿间感觉',
			//标签
			label:[{sonLabel:'限每人2份'},{sonLabel:'2件包邮'}],
			//原价
			originalPrice:'108.8',
			//会员价
			actualPrice:'88.8',
			//数量
			num:1,
			//是否删除
			delete:false
		},
		{
			//是否选中
			isSelect:false,
			//图片路径
			imgSrc:'../../../../assets/img/market/index/shopCart/shopPic_two.png',
			//标题
			title:'台湾红宝石葡萄柚5斤/盒',
			//信息
			link:'享受清爽汁水融进齿间感觉',
			//标签
			label:[{sonLabel:'限每人2份'}],
			//原价
			originalPrice:'98.8',
			//会员价
			actualPrice:'68.8',
			//数量
			num:1,
			delete:false
		},
		{
			//是否选中
			isSelect:false,
			//图片路径
			imgSrc:'../../../../assets/img/market/index/shopCart/shopPic_three.png',
			//标题
			title:'美国佛罗里达州黑提4斤/盒',
			//信息
			link:'享受清爽汁水融进齿间感觉',
			//标签
			label:[{sonLabel:'2件包邮'}],
			//原价
			originalPrice:'120.8',
			//会员价
			actualPrice:'108.8',
			//数量
			num:1,
			delete:false
		},
	];
	//总价钱
	private total;

	 @Output() onVoted = new EventEmitter<boolean>();

	 @Input() _allSelect;

	onSelect(index){
		this.data[index].isSelect=this.data[index].isSelect?false:true;
		this.total=0;
		let This =this;
		//想父组件传递价钱总数
		this.getToaiPrice(This)
	}
	ngOnChanges(changes: {[propKey: string]: SimpleChange}){
		if(changes._allSelect){
			let This =this;
			for(let i=0;i<this.data.length;i++){
			 		this.data[i].isSelect=this._allSelect;
			}
			if(this._allSelect){
				this.getToaiPrice(This);
			}else{
				this.getToaiPrice(This);
			}
		}
		
	}
	getToaiPrice(This){
		This.total=0;
		//想父组件传递价钱总数
		for(let i=0;i<This.data.length;i++){
		 if(This.data[i].isSelect==true){
		 		This.total+=parseFloat(This.data[i].actualPrice)*This.data[i].num;
		 }
		}
		This.onVoted.emit(This.total.toFixed(2));
	}
	numReduce(index){
		//当数量为0时。
		if(this.data[index].num==0){
			//未加入用户确定框。待实现
			this.data.splice(index,1)   //['a','c','d']         删除起始下标为1，长度为1的一个值，len设置的1，如果为0，则数组不变
		}else{
			this.data[index].num=this.data[index].num--==0?0:this.data[index].num--;
		}
	}
	numAdd(index){
		this.data[index].num++;
	}
}
