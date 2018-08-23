import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { intlPrefixes } from '../../ext/mob_prefixes';

import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the EditEmployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

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
  @ViewChild('prev') prev: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer:DomSanitizer, private menu: MenuController) {
  	
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

  isMobile():boolean{
  	return localStorage.view == "mobile";
  }

  ngAfterViewInit(){
    this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
  }

  takePic($event){
    let self = this;
    if($event.target.files && $event.target.files[0]){
      //self.uploadFile($event.target.files[0]);
      console.log($event.target.files[0]);
      let nurl = URL.createObjectURL($event.target.files[0]);
      self.prev.nativeElement.src = nurl;
    }

  }

}
