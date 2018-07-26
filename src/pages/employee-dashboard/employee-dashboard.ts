import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';
import { EmpDisclosureStatementModalPage } from '../emp-disclosure-statement-modal/emp-disclosure-statement-modal';
/**
 * Generated class for the HrDashboardPage page.
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
  selector: 'page-employee-dashboard',
  templateUrl: 'employee-dashboard.html',
})
export class EmployeeDashboardPage {

	outstandingCredit:number = 0;
	availableCredit: number = 50000;
	creditToUse:number = 1000;
	isMobile : boolean = mobilecheck();
	min: number = 1000;
	paydays:number = 1;
	maxPaydays:number = 24;

	interestRate:number = 0.0125;
	processingFeeRate: number = 0.035;
	collectionFeeRate: number = 0.015;
	docFeeRate: number = 0.0075;
	deductionPerPayDay:number = 0;

	intervalPress : any;

	purposeList = ['', 'Debt Consolidation', 'Credit Card Payoff', 'Help a Person', 'Emergency Fund','Medical Expenses', 'Major Purchase', 'Vacation', 'Others'];
	purpose: string = '';

	loan : loanModel;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'dashboard';
  }

  ionViewWillLeave(){
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  toCreditSummary(){
  	this.navCtrl.setRoot(LoansPage,{},{animate:true, direction:"top"});
  }

  checkCredit(val){
  	this.creditToUse += val;
  	if(this.creditToUse	<= 0) this.creditToUse = 0;
  	if(this.creditToUse	>= this.availableCredit) this.creditToUse = this.availableCredit;
  }

  checkPaydays(val){
  	this.paydays += val;
  	if(this.paydays	<= 1) this.paydays = 1;
  	if(this.paydays	>= this.maxPaydays) this.paydays = this.maxPaydays;
  }

  contAdd(b:boolean,val = 500){
  	let self = this;
  	if(b){
  		this.intervalPress = setInterval(()=>{
  			self.checkCredit(val);
  		},100);
  	}
  	else{
  		clearInterval(this.intervalPress);
  	}
  }

  dayAdd(b:boolean,val = 1){
  	let self = this;
  	if(b){
  		this.intervalPress = setInterval(()=>{
  			self.checkPaydays(val);
  		},100);
  	}
  	else{
  		clearInterval(this.intervalPress);
  	}
  }

  launchBreakdown(){
  	this.loan = {
  		amt:this.creditToUse,
    	udi:this.paydays * this.interestRate * this.creditToUse,
    	grossCashout:this.creditToUse,
    	processingFund:this.creditToUse * this.processingFeeRate,
    	collectionFund:this.creditToUse * this.collectionFeeRate,
    	docFee:this.creditToUse * this.docFeeRate,
    	totalDeductions:0,
    	netCashout:0,
    	totalPayment:(this.paydays * this.interestRate * this.creditToUse) + this.creditToUse
  	};

  	let md = this.modal.create(EmpDisclosureStatementModalPage,{data:this.loan},{'cssClass':'whitemodal'});
  	md.present();
  }

}
