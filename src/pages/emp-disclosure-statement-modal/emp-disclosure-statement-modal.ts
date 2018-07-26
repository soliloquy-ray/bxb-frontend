import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Modal, ModalController } from 'ionic-angular';

import {TermsModalPage} from '../terms-modal/terms-modal';
/**
 * Generated class for the DisclosureStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

interface loanModel {
    amt:number,
    udi:number,
    grossCashout:number,
    processingFund:number,
    collectionFund:number,
    docFee:number,
    totalDeductions:number,
    netCashout:number,
    totalPayment:number
}

@IonicPage()
@Component({
  selector: 'page-emp-disclosure-statement-modal',
  templateUrl: 'emp-disclosure-statement-modal.html',
})
export class EmpDisclosureStatementModalPage {

	loan: loanModel;
	isMobile : boolean = mobilecheck();
	payments: any;
	user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController) {
  	this.loan = this.navParams.get('data');
  	this.payments = this.navParams.get('payments');
  	this.user = this.navParams.get('user');
  	console.log(this.loan);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisclosureStatementPage');
    this.loan.totalDeductions = this.loan.processingFund + this.loan.collectionFund + this.loan.docFee;
    this.loan.netCashout = this.loan.amt - this.loan.totalDeductions;
  }

  close(){
  	this.view.dismiss();
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  openTermsModal(){
  	let mod = this.modal.create(TermsModalPage,{},{cssClass:"whitemodal"});
  	mod.present();
  }

}
