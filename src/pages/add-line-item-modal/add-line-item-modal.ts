import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-line-item-modal',
  templateUrl: 'add-line-item-modal.html',
})
export class AddLineItemModalPage {

	label:string = "";
	amt: number = 0;
	sub:boolean = false;
	payments:Array<any>;
	paymentId:number = 0;
	balance:number = 0;
	payCount:number = 0;
	loanId:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private view: ViewController) {
  	this.sub = this.navParams.get('sub') || false;
  	this.payments = this.navParams.get('payments') || [];
  	console.log(this.payments);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLineItemModalPage');
  }

  close(){
  	this.view.dismiss({});
  }

  proceed(){
  	let amount = Math.abs(this.amt);
  	if(this.sub) this.amt = amount * -1;
  	this.view.dismiss({label:this.label,amt:this.amt,payId:this.paymentId,bal:this.balance,seqNum:this.payCount,loanId:this.loanId});
  }

  upd(){
  	let val = this.payments.filter(a=>a.creditAvailmentNumber==this.paymentId)[0];
  	this.balance = val.repaymentAmt;
  	this.payCount = val.seqNo;
  	this.loanId = val.loanId;
  	console.log(this);
  }

}
