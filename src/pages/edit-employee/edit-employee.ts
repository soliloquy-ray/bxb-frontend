import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { intlPrefixes } from '../../ext/mob_prefixes';

import { DomSanitizer } from '@angular/platform-browser';

import { DbProvider } from '../../providers/db/db';
import { EmployeesPage } from '../employees/employees';
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
		mobile: "",
    vacationLeave: 0,
    sickLeave: 0	
  	};
  canSubmit:boolean = true;
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	prefix:string = '63';
  constructor(public navCtrl: NavController, private navParams: NavParams, private sanitizer:DomSanitizer, private db: DbProvider, private loader:LoadingController, private toast:ToastController) {
  	console.log(this.navParams.data);
    this.userData = this.navParams.get('data');
    this.userData.vacationLeave = Math.round(this.userData.vacationLeave);
    this.userData.sickLeave = Math.round(this.userData.sickLeave);
    this.userData.mobile = this.prefix+this.userData.mobile;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEmployeePage');
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  submitReg(){
    if(!this.canSubmit) return false;
    let load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Processing...`,
      dismissOnPageChange: true
    });
    load.present();
    this.db.userUpdate(this.userData).then(res=>{
      this.canSubmit = false;
      load.dismiss();
      let tst = this.toast.create({message:"Employee update succcessful!", duration:3000, position:"top", cssClass:"success"});
      tst.onDidDismiss(()=>{
        this.navCtrl.setRoot(EmployeesPage, {}, {direction:"top",animate:true});
      })
      tst.present();
      console.log(res);
    }).catch(err=>{
      this.canSubmit = false;
      load.dismiss();
      let tst = this.toast.create({message:"Employee update failed!", duration:3000, position:"top", cssClass:"fail"});
      tst.present();
      console.warn(err);
    })
  }

}
