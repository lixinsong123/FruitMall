import { Component,OnInit} from '@angular/core';
import { Router }      from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./css/layout.component.scss','./css/login.component.scss']
})
export class loginComponent implements OnInit {

  private phoneNumber:string;
  private password:string;

  ngOnInit(){
  	this.phoneNumber="";
  	this.password="";
  }
  constructor(private router:Router){}
  identiFication(){
  	//console.log(this.phoneNumber+":"+this.password);
  	if(this.phoneNumber=="123456"&&this.password=="123456"){
  		this.router.navigate(['index']);
  	}else{
  		alert("账号密码错误,请重新输入!");
  	}	
  }
}
