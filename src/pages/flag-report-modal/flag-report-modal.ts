import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';

@IonicPage()
@Component({
  selector: 'page-flag-report-modal',
  templateUrl: 'flag-report-modal.html',
})
export class FlagReportModalPage {

	
	reason:string = '';
	comment:string = '';
	empId:number = 0;
	options:Array<string>= ["AWOL","Memo Given","Applied for Extended Leave", "Retirement", "Retrenchment", "Disciplinary Action","Other"];
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private db: DbProvider, private modal: ModalController, private toast:ToastController) {
  	this.empId = this.navParams.get('id') || 1;
  }

  ionViewDidLoad() {
  }

  close(){
  	this.view.dismiss();
  }

  proceed(){
  	console.log(this);
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

}
