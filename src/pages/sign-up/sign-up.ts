import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';
import { user } from '../../models/user';

import { intlPrefixes } from '../../ext/mob_prefixes';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
	userData: user;
	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
  	this.initData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  initData(){
  	this.userData = {
  		firstName:"",
  		middleName:"",
  		lastName:"",
		userName: "",
		email: "",
		companyCode: "",
		employeeId: "",
		payrollAccount: "",
		password: "",
		mobile: ""	
  	};
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }
}
