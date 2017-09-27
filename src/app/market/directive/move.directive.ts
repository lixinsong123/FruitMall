
import { Directive, ElementRef, Input,OnInit,Renderer,HostListener,OnDestroy} from '@angular/core';


@Directive({ selector: '[myMove]' })

export class MoveDirective  implements OnInit,OnDestroy {
	
	//view对象
	private view;
	//控制器对象
	private controlle;
	//最新的viewLeft值
	private viewLeft;

	//定时器对象
	private timer;

	//控制是否点击
	private isStart=false;
	//索引
	private index =0;

	private orginalX:number;
	private disX:number;

    constructor(private el: ElementRef,private rr:Renderer) {	
    }
    ngOnInit(){	
    	//找到各自对应的对象
    	console.log(this.el);
    	this.view=this.el.nativeElement.children[0];
    	this.controlle=this.el.nativeElement.children[1];
    	this.automaticMove();
    }
    //销毁组件时清除
    ngOnDestroy(){
    	//清楚定时器
    	clearInterval(this.timer);
    }

	    //监听点击事件
		@HostListener('touchstart',['$event']) onMousedown(event) {
				clearInterval(this.timer);
				this.view.style.transition="";
		 		this.isStart=true;
		 		let obj = event.changedTouches[0];
		 		this.viewLeft = -parseFloat(this.getStyle(this.view,'marginLeft'));
		 		this.disX = obj.pageX+this.viewLeft;
		 		this.orginalX=obj.pageX;

		}
		//监听移动事件事件
		@HostListener('touchmove', ['$event']) onMousemove(event){
	  			if(this.isStart){
	  				let obj = event.changedTouches[0];	
	  				this.view.style.marginLeft=obj.pageX-this.disX+"px";
	  			}
		}
		//监听document离开事件
		@HostListener('touchend',['$event']) onMouseup(event) {
			this.isStart=false;	
			let obj = event.changedTouches[0];
			//方向
			let direction = this.orginalX-obj.pageX;
			let width = this.el.nativeElement.offsetWidth;
			console.log(direction);
			//右
			if(direction>0){
				direction=Math.abs(direction);
				let isMove = direction>width/2?true:false;
				this.handMove("right",isMove);
			//左
			}else{
				direction=Math.abs(direction);
				let isMove = direction>width/2?true:false;
				this.handMove("left",isMove);
			}	
		}
		//手动移动
		private handMove(direction,isMove):void{
			let width = this.el.nativeElement.offsetWidth;
			this.view.style.transition=".5s all";

			let sons = this.controlle.getElementsByTagName("li");
			if(isMove){
				if(direction=="right"){
					this.index++;
					this.index=this.index>2?2:this.index;
					this.view.style.marginLeft=-width*this.index+"px";
					this.addClass(sons,this.index)
				}else{
					this.index--;
					this.index=this.index<0?0:this.index;
					this.view.style.marginLeft=-width*this.index+"px";
					this.addClass(sons,this.index)
				}
			}else{
				this.view.style.marginLeft=-width*this.index+"px";
			}
			this.automaticMove();
		}

		//自动移动
		private automaticMove():void{
			clearInterval(this.timer);
			let width = this.el.nativeElement.offsetWidth;
			let sons = this.controlle.getElementsByTagName("li");
			this.view.style.transition=".5s all";
			var This=this;
			this.timer=setInterval(function(){
				This.index++;
				This.index=This.index>2?0:This.index;
				This.view.style.marginLeft=-width*This.index+"px";
				This.addClass(sons,This.index);
			},5000)
		}

		private addClass(obj,index){
			
			for(let i=0;i<obj.length;i++){
				obj[i].classList.remove("active");
			}
			obj[index].classList.add("active");
		}

		private getStyle(obj,attr){ 
		  if(obj.currentStyle){ 
		    return obj.currentStyle[attr]; 
		  } 
		  else{ 
		    return document.defaultView.getComputedStyle(obj,null)[attr]; 
		  } 
		}
				
}