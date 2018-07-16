import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-signup-tin',
  templateUrl: 'signup-tin.html',
})
export class SignupTinPage {
	tin: string;
	isMobile : boolean = mobilecheck();
	tinValid : boolean = true;
	load: any;
	@ViewChild('tin') input_tin: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loader: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  verify(){
  	let self = this;
  	this.load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Processing...`,
      dismissOnPageChange: true
    });
    this.load.present();
    setTimeout(()=>{
  		self.navCtrl.setRoot(SignUpPage,{},{animate:true, direction:"top"});
    },1000);
  }

  ch(event){
  	let cls = Array.from(event.target.classList);
  	this.tinValid = cls.includes("ng-invalid") && cls.includes("ng-dirty");
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }


}
