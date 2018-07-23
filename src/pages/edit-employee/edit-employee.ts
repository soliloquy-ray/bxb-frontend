import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { intlPrefixes } from '../../ext/mob_prefixes';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-edit-employee',
  templateUrl: 'edit-employee.html',
})
export class EditEmployeePage {

	isMobile : boolean = mobilecheck();
  	userData = {
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
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	prefix:string = '63';
  constructor(public navCtrl: NavController, private navParams: NavParams, private sanitizer:DomSanitizer) {
  	console.log(this.navParams.data);
    this.userData = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEmployeePage');
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

}
