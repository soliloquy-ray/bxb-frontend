import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the LoanComponent component.
 *
 * This should perform all computations based on 
 * loan amount, t, and interest
 */
@Component({
  selector: 'loan',
  templateUrl: 'loan.html'
})
export class LoanComponent {
	@Input('principal') p: number = 1000;
	@Input('paydays') t: number = 1; //term 
	@Input('rate') r: number = 0.025;
	@Input('type') type: any;

	@Input('processingFeeRate') processingFeeRate: number = 0.035;
	@Input('collectionFeeRate') collectionFeeRate: number = 0.015;
	@Input('docFeeRate') docFeeRate : number = 0.0075;
	dates : Array<{paymentDate,paymentNum,amt,bal}> = [];
	@Input('sdate') sdate :any = new Date();

	deductionPerPayDay:number = ((this.t * this.r * this.p) + this.p)/this.t;
	loan;
  constructor() {
  }

  getLoan(noDisplay:boolean = false){
  	let r = this.r/2;
  	this.loan = {
  		amt:Math.round(this.p),
    	udi:this.t * r * this.p,
    	grossCashout:Math.round(this.p),
    	processingFund:this.p * this.processingFeeRate,
    	collectionFund:this.p * this.collectionFeeRate,
    	docFee:this.p * this.docFeeRate,
    	totalDeductions:this.p * this.processingFeeRate + this.p * this.collectionFeeRate + this.p * this.docFeeRate,
    	netCashout:Math.round(this.p) - (this.p * this.processingFeeRate + this.p * this.collectionFeeRate + this.p * this.docFeeRate),
    	totalPayment:(this.t * r * this.p) + Math.round(this.p)
  	};
  	let intRate = Math.round(this.t) * r * Math.round(this.p);
  	let deductible = intRate + Math.round(this.p);
  	this.deductionPerPayDay = deductible/this.t;
  	return this.loan;
  }

  getDates():Promise<any>{
  	this.getLoan();
  	this.dates = [];
  	let fd = new Date(this.sdate.split(/[-T.]/).slice(0,3).join("-"));
  	let mn = fd.getMonth();
  	let yr = fd.getFullYear();
  	let initDay;
  	let r = this.r/2;
  	let p = Math.round(this.p);
  	let dppd = this.deductionPerPayDay * 1;
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

  	for(let i = 0; i<this.t; i++){
  		let dt = `${yr}-${('0'+mn).slice(-2)}-${initDay}`;
  		this.dates.push({paymentDate:dt, paymentNum:(i+1), amt:dppd, bal:((this.t * r * p) + p) - (dppd * (i+1))});
  		if(initDay == 30){
  			initDay = 15;
  			++mn;
  			if(mn >= 13){
  				++yr;
  				mn=1;
  			}
  		}else{
  			initDay = 30;
  		}
  	}
  	console.log(this.dates);
  	return Promise.resolve(this.dates);
  }


}
