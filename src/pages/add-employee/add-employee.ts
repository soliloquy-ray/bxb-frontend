import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';
import { TermsPage } from '../terms/terms';
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
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {
	userData: user = {
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
	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
	dt;
	prefix:string = '63';
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private alert: AlertController) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  ngAfterViewInit(){
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  submitReg(){
  	let alert = this.alert.create({
  		enableBackdropDismiss: true,
  		title: "No backend",
  		message: "Coming soon",
  		buttons:[
  		{
  			text:"Ok",
  			role:'cancel'
  		}]
  	});

  	alert.present();
  }

  goToTerms(){
  	window.open(window.location.origin+"/#/terms");
  	//this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
  }

  stat(event){
  	console.log(this);
  }

  
}
