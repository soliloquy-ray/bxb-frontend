import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

//import { Http, Headers, RequestOptions } from '@angular/http';
import { DbProvider } from '../../providers/db/db';

import { config } from '../../ext/config';

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
  b : {day,month,year} = {day:'01',month:'01',year:1971};
	birth : String = new Date("1971-01-01").toISOString();
  birthday: any;
	isMobile : boolean = mobilecheck();
	tinValid : boolean = true;
	ccode: string = "";
	load: any;

	day : Array<string> = [];
	month : Array<string> = [];
	year : Array<string> = [];

	env = config[location.origin].backend;

	months = {"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec"};
	@ViewChild('tin') input_tin: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loader: LoadingController, private db: DbProvider, private toast: ToastController) {

  	for(let i = 1; i<=12; i++){
  		let st = (i<10?"0"+i.toString():i.toString());
  		this.month.push(st);
  	}
  	for(let i = 1; i<=31; i++){
  		let st = (i<10?"0"+i.toString():i.toString());
  		this.day.push(st);
  	}
  	for(let i = 1920; i<=parseInt(new Date().getFullYear().toString()); i++){
  		let st = (i<10?"0"+i.toString():i.toString());
  		this.year.push(st);
  	}
  }

  ionViewDidLoad() {
    console.log(this.env, config);
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

    if(!this.isMobile) this.birthday = this.b;
    let brt = `${this.birthday.year}-${("0"+this.birthday.month).slice(-2)}-${("0"+this.birthday.day).slice(-2)}`;
  		
  	//let uData = {tin:this.tin,ccode:this.ccode,birth:brt};
  	let uData = {tin:this.tin,birth:brt};
  	
  	//this.http.post(`${this.env}/api.php?q=get_by_tin`,uData, rq).toPromise()
    this.db.checkTin(uData)
  			.then(res=>{
  				let rs = res.json();
  				if(rs[0]){
  					self.navCtrl.setRoot(SignUpPage,{data:rs[0]},{animate:true, direction:"top"});
  				}else{	
	  				let tst = self.toast.create({
	  					message:"Signup failed. Please check your credentials and try again.",
	  					cssClass:"fail",
	  					duration:3000,
	  					dismissOnPageChange: true,
	  					position:"top"
	  				});
	  				tst.present();
  				}
  				self.load.dismiss();
  			})
  			.catch(err=>{
  				self.load.dismiss();
  				console.warn(err);
  				let tst = self.toast.create({
  					message:"Signup failed. Please check your credentials and try again.",
  					cssClass:"fail",
  					duration:3000,
  					dismissOnPageChange: true,
  					position:"top"
  				});
  				tst.present();
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

  ev(e){
    this.birthday = e;
  }
}
