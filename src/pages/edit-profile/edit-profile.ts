import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

	isMobile : boolean = mobilecheck();
	locData : any;
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
  constructor(public navCtrl: NavController, private navParams: NavParams, private sanitizer:DomSanitizer, private menu: MenuController) {
  	
  }

  ionViewDidEnter(){
  	localStorage.page = '';
	this.menu.close();
  }

  ionViewDidLoad() {
    try{
    	this.locData = JSON.parse(localStorage.userData);
    	this.userData.firstName = this.locData.Name_First;
    	this.userData.middleName = this.locData.Name_Middle;
    	this.userData.lastName = this.locData.Name_Last;
    	this.userData.email = this.locData.email;
    	this.userData.mobile = this.locData.mobile.slice(-10);
    	//this.userData.password = this.locData.Password;
    }catch(e){
    	console.warn(e);
    }
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

}
