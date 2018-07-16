import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

//import { SignUpPage } from '../sign-up/sign-up';
import { SignupTinPage } from '../signup-tin/signup-tin';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

export interface login {
	loginInfo: string,
	pass: string
};

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	userData:login = {loginInfo:"", pass:""};
	isMobile: boolean = mobilecheck();
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  	console.log(this.isMobile);
  }

  ionViewDidEnter() {
  	this.menu.close();
  }

  toReg(){
  	this.navCtrl.setRoot(SignupTinPage,{},{animate:true, direction:"forward"});
  }

  toForget(){
  	this.navCtrl.setRoot(ForgotPasswordPage,{},{animate:true, direction:"forward"});
  }

  reorient(){
  	this.isMobile = mobilecheck();
  }
}
