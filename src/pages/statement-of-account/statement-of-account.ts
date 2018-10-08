import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, LoadingController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

import { AddLineItemModalPage } from '../add-line-item-modal/add-line-item-modal';
/**
 * Generated class for the StatementOfAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statement-of-account',
  templateUrl: 'statement-of-account.html',
})
export class StatementOfAccountPage {		
	currentBalance = [/*{
			"transDate":"2018-04-15",
			"creditAvailmentNumber":4,
			"memberID":"00202",
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"seqNo":"9/12",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":479.16,
			"status":"Active"
		},{
			"transDate":"2018-08-07",
			"creditAvailmentNumber":41,
			"memberID":"00252",
			"firstName":"Ray",
			"lastName":"Santos",
			"seqNo":"1/12",
			"empID":"123",
			"transType":"Credit Availment",
			"repaymentAmt":2395.83,
			"status":"Active"
		},
	*/];	

	prevBalance = [/*{
			"transDate":"2018-04-15",
			"creditAvailmentNumber":4,
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"seqNo":"7/12",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":479.16,
			"status":"Active"
		},{
			"transDate":"2018-04-27",
			"creditAvailmentNumber":8,
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"seqNo":"4/4",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":8400,
			"status":"Preterminated"
		},{
			"transDate":"2018-04-15",
			"creditAvailmentNumber":4,
			"firstName":"Ray",
			"lastName":"Santos",
			"seqNo":"8/12",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":479.16,
			"status":"Active"
		}*/
	];
	data;
	cid;
	lineItems: Array<{label:string,amt:number,payId:number,bal:number,seqNo:number,loanId:number}> = [];
	lineTotal: number = 0;
	accountType: string = localStorage.accountType;
	submitted: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private db: DbProvider, private modal: ModalController, private loader: LoadingController) {
  	this.data = this.navParams.get('data') || [];
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StatementOfAccountPage');
    if(this.data.length < 1){
    	this.db.getSOAByDate(1,'2018-09-30','2018-09-30').then(res=>{
	  		this.data = res.json()[0];
	  		this.populateData();
	  	}).catch(console.warn);
    }else{
    	this.populateData();
    }
  }

  async populateData(){
  	this.lineItems = [];
  	await this.db.getSOAPaySchedByDate(this.data.billPeriod,this.data.CompanyID).then(res=>{
  		this.prevBalance = [];
  		this.currentBalance = res.json();
  	}).catch(console.warn);

  	this.currentBalance.map(a=>{
  		this.db.getLineItems(a.loanId,this.data.billPeriod).then(res=>{
  			let rs = res.json();
  			this.lineItems = this.lineItems.concat(rs);
  			if(rs.length > 0) this.submitted = true;
  			this.getLineItemsTotal();
  		}).catch(console.warn);
  	})
  }

  print(){
  	window.print();
  }

  addItem(){
  	let mod = this.modal.create(AddLineItemModalPage,{sub:false,payments:this.currentBalance.concat(this.prevBalance)},{cssClass:`whitemodal xxs`});
  	mod.onDidDismiss(a=>{
  		console.log(a);
  		if(a.label && a.amt){
  			this.lineItems.push({label:a.label,amt:a.amt,payId:a.payId,bal:a.bal,seqNo:a.seqNum,loanId:a.loanId});
  			//this.db.addLineItem({payId:a.payId,loanId:a.loanId,payDate:this.data.billPeriod,payCount:a.seqNum,payAmount:a.amt,balance:a.bal}).then(console.info).catch(console.warn);
  		}
  		this.getLineItemsTotal();
  	})
  	mod.present();
  }

  remItem(){
  	let mod = this.modal.create(AddLineItemModalPage,{sub:true,payments:this.currentBalance.concat(this.prevBalance)},{cssClass:`whitemodal xxs`});
  	mod.onDidDismiss(a=>{
  		console.log(a);
  		if(a.label && a.amt){
  			this.lineItems.push({label:a.label,amt:a.amt,payId:a.payId,bal:a.bal,seqNo:a.seqNum,loanId:a.loanId});  
  		}
  		this.getLineItemsTotal();
  	})
  	mod.present();
  }

  async getLineItemsTotal(){
  	let red = 0;
  	await
    this.lineItems.map(a=>{
    	red += parseFloat(a.amt.toString());
    });
    console.log(red);
    this.lineTotal = red*-1;
  }

  close(){
  	this.view.dismiss();
  }

  async submit(){
  	let load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Submitting Data...`,
      dismissOnPageChange: true
    });
    load.present();
  	console.log('submitting this '+JSON.stringify(this.data));
  	await this.lineItems.map(a=>{
  		this.db.addLineItem({payId:a.payId,loanId:a.loanId,payDate:this.data.billPeriod,payCount:a.seqNo,payAmount:a.amt,balance:a.bal}).then(console.info).catch(console.warn);
  	})
  	this.submitted = true;
  	load.dismiss();
  }
}
