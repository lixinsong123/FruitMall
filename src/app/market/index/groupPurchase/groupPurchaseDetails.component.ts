import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap,Router} from '@angular/router';
@Component({
  template:`
	<index-header [title]='title'></index-header>
	<div>
		
		<div class="division" >
			<div class="picBg">
				<img [src]="item.imgUrl" alt="" />
			</div>
			<div class="itemInformation">
					<p class="name">{{item.name}}</p>
					<p class="link">{{item.link}}</p>
					<p class="itemLabel clear">
						<label for="" *ngFor="let son of item.itemLabel">{{son}}</label>
					</p>
					<p class="price">
						会员价: 
						<strong>￥{{item.toPrice}}</strong>
						<b>￥{{item.oriPrice}}</b>
					</p>
					<div class="product" myEject>
						<span></span>
						<label for="">产品参数</label>						
					</div>
			</div>
			<ul class="feature clear">
					<li>
						<span>

						</span>
						<label for="">
							2小时送达
						</label>
					</li>
					<li>
						<span>

						</span>
						<label for="">
							免邮
						</label>
					</li>
					<li>
						<span>

						</span>
						<label for="">
							健康有机
						</label>
					</li>
					<li>
						<span>

						</span>
						<label for="">
							科学种植
						</label>
					</li>
			</ul>
			<div class="specification">
				<h3>规格
					<span></span>
				</h3>
				<p class="conmon clear specialTop">
					<strong>
						规格
					</strong>
					<b>
						1箱
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						重量
					</strong>
					<b>
						3200g
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						保质期
					</strong>
					<b>
						三年
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						储存方法
					</strong>
					<b>
						常温
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						等级
					</strong>
					<b>
						3级
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						产地
					</strong>
					<b>
						马来西亚
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						配料表
					</strong>
					<b>
						无
					</b>
				</p>
				<p class="conmon clear specialTop">
					<strong>
						食品添加剂
					</strong>
					<b>
						无
					</b>
				</p>
			</div>
		</div>
		<div class="footer clear"> 
			<span class="solo">
				单人购买(￥{{item.toPrice}})
			</span>
			<span class="team">
				点击开团（￥{{item.oriPrice}}）
			</span>
		</div>
			<div class="productParameter">
								<div class="mask">
								</div>
								<div class="core">
									<h3>产品参数
										<i></i>
									</h3>
									<p class="clear">
										<strong>净重量</strong>
										<b>2500g</b>
									</p>
									<p class="clear">
										<strong>包装方式</strong>
										<b>盒装</b>
									</p>
									<p class="clear">
										<strong>保存期</strong>
										<b>1周</b>
									</p>
									<p class="clear">
										<strong>品牌</strong>
										<b>鲜丰</b>
									</p>
									<p class="clear">
										<strong>售卖方式</strong>
										<b>单品</b>
									</p>
									<p class="clear">
										<strong>水果种类</strong>
										<b>核果类</b>
									</p>
									<p class="clear">
										<strong>产地</strong>
										<b>中国湘西</b>
									</p>
								</div>
								<div class="btn">
										关闭
								</div>
							</div>
		

	</div>
  `,
  styleUrls: ['../css/groupPurchaseDetails.component.scss']
})
export class groupPurchaseDetailsComponent implements OnInit {
	title="团购详情";
	item=null;
	constructor(private route:ActivatedRoute){};
	ngOnInit() {
        this.route.params.subscribe((params) => {
           this.item=this.allDatas[params.id-1];
        });
    };
    //模拟数据
    allDatas=[
    	{
    		imgUrl:'../../../../assets/img/market/reallyIndex/hotsell/friut_one.png',
    		name:'意大利绿奇异果3200g/20个',
    		link:'享受清爽汁水融进齿间感觉',
    		itemLabel:['限每人2份','今日特价'],
    		toPrice:35.9,
    		oriPrice:55.9,
    	},
    	{
    		imgUrl:'../../../../assets/img/market/reallyIndex/hotsell/friut_two.png',
    		name:'湖南黔阳冰糖橙3200g/20个',
    		link:'享受清爽汁水融进齿间感觉',
    		itemLabel:['限每人2份'],
    		toPrice:65.9,
    		oriPrice:105.9,
    	}
    ]
}
