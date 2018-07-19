import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, Toast } from 'ionic-angular';

//import { SignUpPage } from '../sign-up/sign-up';
import { SignupTinPage } from '../signup-tin/signup-tin';
import { HrDashboardPage } from '../hr-dashboard/hr-dashboard';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { Http, Headers, RequestOptions } from '@angular/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

export interface login {
	username: string,
	pass: string
};

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	userData:login = {username:"", pass:""};
	isMobile: boolean = mobilecheck();
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private http: Http, private toast: ToastController) {
  	console.log(this.isMobile);
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'login';
  }

  toReg(){
  	this.navCtrl.setRoot(SignupTinPage,{},{animate:true, direction:"forward"});
  }

  login(){
  	let self = this;
  	let uData = this.userData;
  	let hdr = new Headers;
  	hdr.append('Content-Type','application/json');
  	let rq = new RequestOptions;
  	rq.headers = hdr;
  	
  	this.http.post('https://bxb-backend-php.azurewebsites.net/api.php?q=login',uData, rq)
  			.toPromise()
  			.then(res=>{
  				let txt = res.text();
  				let stat = (txt == "Invalid login" ? "fail" : "success");
  				let tst = this.launchToast(txt,stat);
  				tst.onDidDismiss(t=>{
  					if(stat == "success"){
  						self.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
  					}
  				});
  			})
  			.catch(console.warn);
  }

  launchToast(msg:string, status: any = 1) : Toast{
	  let toast = this.toast.create({
	    message: msg,
	    duration: 3000,
	    position: 'top',
	    cssClass:`${status}`
	  });
	  toast.present();
	  return toast;
  }

  toForget(){
  	this.navCtrl.setRoot(ForgotPasswordPage,{},{animate:true, direction:"forward"});
  }

  reorient(){
  	this.isMobile = mobilecheck();
  }
}
