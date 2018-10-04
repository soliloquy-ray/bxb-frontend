import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';

@IonicPage()
@Component({
  selector: 'page-employee-preterm-form',
  templateUrl: 'employee-preterm-form.html',
})
export class EmployeePretermFormPage {
	data;
	loan;
	loanFee:number = 0;
	loanInterest:number = 0;
	user = JSON.parse(localStorage.userData);
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private db: DbProvider, private modal: ModalController) {
  	this.loan = this.navParams.get('data') || [];
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
}
