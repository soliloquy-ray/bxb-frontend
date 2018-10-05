import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';

@IonicPage()
@Component({
  selector: 'page-admin-preterm-form',
  templateUrl: 'admin-preterm-form.html',
})
export class AdminPretermFormPage {
	data;
	loan;
	loanFee:number = 0;
	loanInterest:number = 0;
	user;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private db: DbProvider, private modal: ModalController) {
  	this.loan = this.navParams.get('data') || [];
    this.user = this.navParams.get('user') || [];
      this.loanFee = this.loan.principal * 0.03;
      this.loanInterest = this.loan.principal * 0.0125;
  }

  ionViewDidLoad() {
    console.log(this);
  }

  close(){
  	this.view.dismiss();
  }

  getAmtDue():number{
    return parseFloat((this.loan.principal*1 + this.loanInterest*1 + this.loanFee*1).toString());
  }

  isMobile(){
    return localStorage.view == "mobile";
  }

  nextSoaDate(){
    let fd = new Date();
    let mn = fd.getMonth()+1;
    let yr = fd.getFullYear();
    let dt;
    if(fd.getDate() >= 15){
      dt = '30';
    }else{
      dt = '15';
    }
    return yr+"-"+("0"+mn).slice(-2)+"-"+dt;
  }
}
