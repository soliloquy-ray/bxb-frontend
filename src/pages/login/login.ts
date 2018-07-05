import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.isMobile);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toReg(){
  	this.navCtrl.setRoot(SignUpPage,{},{animate:true, direction:"forward"});
  }
  
  reorient(){
  	this.isMobile = mobilecheck();
  }
}
