import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EmployeeInfoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-employee-info-modal',
  templateUrl: 'employee-info-modal.html',
})
export class EmployeeInfoModalPage {
	userData = {
		memberID: "00202",
		name: "George Miguel Winternitz",
		gender: "M",
		age: 38,
		dateHired: "February 14, 2016",
		email: "gmwinternitz@gmail.com",
		mobile: "+639175342447",
		birthdate: "October 07, 1979",
		position: "CEO",
		entity: "NA",
		type: "NA",
		division: "NA",
		payrollAccount: 7190064572,
		VL: 0,
		SL: 0,
		ML: 0,
		PL: 0
	};
	isMobile : boolean = mobilecheck();
  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeInfoModalPage');
  }

  close(){
  	this.view.dismiss();
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

}
