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

	deductionPerPayDay:number = ((this.t * this.r * this.p) + this.p)/this.t;
	loan;
  constructor() {
  }

  getLoan(noDisplay:boolean = false){
  	this.loan = {
  		amt:this.p,
    	udi:this.t * this.r * this.p,
    	grossCashout:this.p,
    	processingFund:this.p * this.processingFeeRate,
    	collectionFund:this.p * this.collectionFeeRate,
    	docFee:this.p * this.docFeeRate,
    	totalDeductions:0,
    	netCashout:0,
    	totalPayment:(this.t * this.r * this.p) + this.p
  	};
  	this.deductionPerPayDay = ((this.t * this.r * this.p) + this.p)/this.t;
  	return this.loan;
  }

  getDates():Promise<any>{
  	this.getLoan();
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

  	for(let i = 0; i<this.t; i++){
  		let dt = `${yr}-${('0'+mn).slice(-2)}-${initDay}`;
  		this.dates.push({paymentDate:dt, paymentNum:(i+1), amt:this.deductionPerPayDay, bal:((this.t * this.r * this.p) + this.p) - (this.deductionPerPayDay * (i+1))});
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
