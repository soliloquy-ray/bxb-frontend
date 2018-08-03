import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';
import { EmpDisclosureStatementModalPage } from '../emp-disclosure-statement-modal/emp-disclosure-statement-modal';

import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';

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
	deductionPerPayDay:number = ((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse)/this.paydays;

	intervalPress : any;

	purposeList = ['', 'Debt Consolidation', 'Credit Card Payoff', 'Help a Person', 'Emergency Fund','Medical Expenses', 'Major Purchase', 'Vacation', 'Others'];
	purpose: string = '';

	loan : loanModel;
	dates : Array<{paymentDate,paymentNum,amt,bal}> = [];
  	env = config[location.origin].backend;
  	userData = JSON.parse(localStorage.userData)[0];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private http: Http) {
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
  	this.deductionPerPayDay = ((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse)/this.paydays;
  	this.getDates();
  }

  checkPaydays(val){
  	this.paydays += val;
  	if(this.paydays	<= 1) this.paydays = 1;
  	if(this.paydays	>= this.maxPaydays) this.paydays = this.maxPaydays;
  	this.getDates();
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

  launchBreakdown(noDisplay:boolean = false){
  	this.checkCredit(0);
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
  	this.getDates().then(dt=>{
  		if(!noDisplay){
		  	let md = this.modal.create(EmpDisclosureStatementModalPage,{data:this.loan, payments:dt},{'cssClass':'whitemodal'});
		  	md.present();
		}
  	});

  }

  getDates():Promise<any>{
  	this.dates = [];
  	let fd = new Date();
  	let mn = fd.getMonth();
  	let yr = fd.getFullYear();
  	let initDay;
  	if(fd.getDate() > 15){
  		initDay = 15;
  		mn+=2;
  		if(mn >= 13){
  			++yr;
  			mn = 1;
  		}
  	}
  	else{
  		initDay = 30;
  		++mn;
  		if(mn >= 13){
  			++yr;
  			mn = 1;
  		}
  	}

  	for(let i = 0; i<this.paydays; i++){
  		let dt = `${yr}-${('0'+mn).slice(-2)}-${initDay}`;
  		this.dates.push({paymentDate:dt, paymentNum:(i+1), amt:this.deductionPerPayDay, bal:((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse) - (this.deductionPerPayDay * (i+1))});
  		if(initDay == 30){
  			initDay = 15;
  			++mn;
  			if(mn >= 13){
  				++yr;
  				mn=1;
  			}
  		}else{
  			initDay = 30;
  			++mn;
	  		if(mn >= 13){
	  			++yr;
	  			mn = 1;
	  		}
  		}
  	}
  	console.log(this.dates);
  	return Promise.resolve(this.dates);
  }

	addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}

/**
@master_id int,
@principal float,
@interest float,
@paydays int,
@purpose varchar(1000),
@applicationDate datetime,
@processFund float,
@collectionFund float,
@documentFee float **/
	addLoan(){
		this.launchBreakdown(true);
	  	let hdr = new Headers;
	  	hdr.append('Content-Type','application/json');
	  	let rq = new RequestOptions;
	  	rq.headers = hdr;
	  	
	  	let uData = {
	  		id:this.userData.master_id,
	  		principal: this.loan.amt,
	  		interest: this.loan.udi,
	  		paydays: this.paydays,
	  		purpose: this.purpose,
	  		processFund: this.loan.processingFund,
	  		collectionFund: this.loan.collectionFund,
	  		documentFee: this.loan.docFee
	  	};

	  	this.http.post(`${this.env}/api.php?q=applyloan`,{loan:uData}, rq)
	  			.toPromise()
	  			.then(console.info)
	  			.catch(console.warn)
	}

}
