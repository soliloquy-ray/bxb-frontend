import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, Toast } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

import { Http, Headers, RequestOptions } from '@angular/http';

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
	bday: string = '1971-01-01';
	isMobile : boolean = mobilecheck();
	tinValid : boolean = true;
	load: any;
	@ViewChild('tin') input_tin: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loader: LoadingController, private http: Http, private toast: ToastController) {
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
  		
  	let uData = {tin:this.tin,birth:this.bday};
  	console.log(uData);
  	let hdr = new Headers;
  	hdr.append('Content-Type','application/json');
  	let rq = new RequestOptions;
  	rq.headers = hdr;
  	
  	this.http.post('https://bxb-backend-php.azurewebsites.net/api.php?q=get_by_tin',uData, rq)
  			.toPromise()
  			.then(res=>{
  				let rs = res.json();
  				if(rs[0]){
  					self.navCtrl.setRoot(SignUpPage,{data:rs[0]},{animate:true, direction:"top"});
  				}
  				self.load.dismiss();
  			})
  			.catch(err=>{
  				self.load.dismiss();
  				console.warn(err);
  			});
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
