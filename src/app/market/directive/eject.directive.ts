
import { Directive, ElementRef, Input,OnInit,Renderer,HostListener,OnDestroy} from '@angular/core';

@Directive({ selector: '[myEject]' })

export class EjectDirective implements OnInit{

	constructor(private el: ElementRef,private rr:Renderer) {	
    }
    //start
    clickStart;
    //弹出层
    popup;
    //end
    clickEnd;
    ngOnInit(){	
    	//找到各自对应的对象
    	//querySelector
    	console.log(this.el.nativeElement);
    	this.clickStart=this.el.nativeElement;
    	this.popup =document.querySelector('.productParameter');
    	this.clickEnd = document.querySelector(".btn");
    	let This =this;
    	this.clickEnd.onclick=function(){
    			This.popup.style.top="";	
				This.popup.style.opacity="";
				document.body.style.height="";
				document.body.style.overflow="";	
    	}

    }
     //监听点击事件
		@HostListener('touchstart',['$event']) onMousedown(event) {
				this.popup.style.top="0px";	
				this.popup.style.opacity="1";
				document.body.style.height="667px";
				document.body.style.overflow="hidden";	
		}
}