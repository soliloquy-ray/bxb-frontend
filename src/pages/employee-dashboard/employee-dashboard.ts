import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { EmployeeLoansPage } from '../employee-loans/employee-loans';
import { TermsModalPage } from '../terms-modal/terms-modal';
import { EmpDisclosureStatementModalPage } from '../emp-disclosure-statement-modal/emp-disclosure-statement-modal';

import { DbProvider } from '../../providers/db/db';
import { AppProvider } from '../../providers/app/app';
import { config } from '../../ext/config';

import { CookieService } from 'ngx-cookie-service';

/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  	userData = JSON.parse(localStorage.userData);

  submitFlag : boolean = false;
  leaving: boolean = false;
  hasPendingLoan:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private db: DbProvider, private alert: AlertController, private loader: LoadingController, private toast:ToastController, private appProvider: AppProvider, private cookie: CookieService) {
  }

  ionViewDidEnter() {

    if( typeof this.userData == "undefined" || this.userData == ""){
      this.logout();
      return ;
    }

  	this.menu.close();
  	localStorage.page = 'dashboard';

    this.getActiveLoanAmt().then(res=>{
      this.outstandingCredit = parseFloat(res.toString());
      this.availableCredit -= parseFloat(res.toString());
      if(this.availableCredit <= 0){
        this.availableCredit = 0;
        this.min = 0;
        this.creditToUse = 0;
        let alert = this.alert.create({
          title: 'Credit Loan at Maximum',
          subTitle: "You have reached your maximum loan amount.",
          buttons: ['Dismiss'],
          enableBackdropDismiss:true
        });
        if(!this.leaving) alert.present();
      }
    });
    this.getPendingLoansCount().then(res=>{
      this.hasPendingLoan = res > 0;
      if(this.hasPendingLoan){

        let alert = this.alert.create({
          title: 'Pending Loan',
          subTitle: "You can't apply for a new loan because you have a loan currently pending approval.",
          buttons: ['Dismiss'],
          enableBackdropDismiss:true
        });
        if(!this.leaving) alert.present();
      }
    });
  }

  ionViewWillLeave(){
    this.leaving = true;
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

  toCreditSummary(){
  	this.navCtrl.setRoot(EmployeeLoansPage,{},{animate:true, direction:"top"});
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
    this.appProvider.generateOTP();
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
      if(mn == 2){
        initDay = 28;
        if(yr%4 == 0){
          initDay = 29;
        }
      }
      else{
  		  initDay = 30;
      }
  		++mn;
  		if(mn >= 13){
  			++yr;
  			mn = 1;
  		}
  	}

  	for(let i = 0; i<this.paydays; i++){
  		let dt = `${yr}-${('0'+mn).slice(-2)}-${initDay}`;
  		this.dates.push({paymentDate:dt, paymentNum:(i+1), amt:this.deductionPerPayDay, bal:((this.paydays * this.interestRate * this.creditToUse) + this.creditToUse) - (this.deductionPerPayDay * (i+1))});
  		if(initDay != 15){
  			initDay = 15;
  			++mn;
  			if(mn >= 13){
  				++yr;
  				mn=1;
  			}
  		}else{
        if(mn == 2){
          initDay = 28;
          if(yr%4 == 0){
            initDay = 29;
          }
        }
        else{
          initDay = 30;
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

  viewTerms(){
    if(this.purpose.trim() == '' || this.submitFlag || this.creditToUse <= 0 || this.hasPendingLoan) return false;
    let trms = this.modal.create(TermsModalPage,{int:true});
    let self = this;
    trms.onDidDismiss(trip=>{
      if(trip=="proceed"){
        let load = this.loader.create({
            spinner: 'crescent',
            dismissOnPageChange: true,
            showBackdrop: true,
            content: `Processing...`,
            enableBackdropDismiss:false
        });
        load.present();
        let otp = self.appProvider.generateOTP();
        self.appProvider.sendOTPmsg(otp,this.userData.mobile.slice(-10)).then(res=>{
          console.log(res);
          load.dismiss();
          self.addLoan();
        }).catch(console.warn);
      }
    });
    trms.present();
  }

	addLoan(iv:boolean = false){
		let self = this;
		let al = this.alert.create({
			enableBackdropDismiss:false,
			title:'Confirmation',
			inputs:[
        {
          type:'text',
          placeholder:"Enter OTP",
          name:"otp"
        }
      ],
			buttons:[
				{
					text:'Proceed',
					handler: data=>{
						if(self.appProvider.checkOtp(data.otp)){
              self.submitFlag = true;
              self.createNewLoan();
              self.appProvider.sendLoanApproval(self.loan.amt,self.userData.mobile.slice(-10))
              .then(console.info)
              .catch(console.warn)
            }else{
              self.addLoan(true);
            }
					}
				},
				{
					text:'Cancel',
					role:'cancel'
				}
			]
		});
    if(iv){
      al.setTitle("Invalid OTP code!")
    }
		al.present();
	}

/*
let otp = self.appProvider.generateOTP();
self.appProvider.sendOTPmsg(otp,9988560026).then(res=>{
  console.log(res);
}).catch(console.warn);
*/

  async getPendingLoansCount(){
    let ret :number = 0;
    await this.db.getEmpLoansByStatus(1).then(res=>{
      ret = res.length;
    }).catch(console.warn);
    return ret;
  }

  async getActiveLoanAmt(){
    let total :number = 0;
    let reducer = (a,b)=>parseFloat(a.principal)+parseFloat(b.principal);
    await this.db.getEmpLoansByStatus(2).then(res=>{
      if(res.length > 1)  total = res.reduce(reducer);
      else if(res.length == 1) total = res[0].principal;
    }).catch(console.warn);
    await this.db.getEmpLoansByStatus(4).then(res=>{
      if(res.length > 1) total += res.reduce(reducer);
      else if(res.length == 1) total += res[0].principal;
    })
    return total;
  }

	createNewLoan(){
    let self = this;
		let load = this.loader.create({
	      spinner: 'crescent',
	      dismissOnPageChange: true,
	      showBackdrop: true,
	      content: `Processing...`,
	      enableBackdropDismiss:false
		});
		load.present();
		this.launchBreakdown(true);
	  	
	  	let uData = {
	  		id:this.userData.master_id,
	  		principal: this.loan.amt,
	  		interest: this.interestRate*2,
	  		paydays: this.paydays,
	  		purpose: this.purpose,
	  		processFund: this.loan.processingFund,
	  		collectionFund: this.loan.collectionFund,
	  		documentFee: this.loan.docFee
	  	};

	  	this.db.createNewLoan(uData)
	  			.then(res=>{
	  				load.dismiss();
            let tst = self.toast.create({
              message: 'Loan has been submitted for approval.',
              duration: 3000,
              position: 'top',
              cssClass:`success`
            });
            tst.onDidDismiss(data=>{
              self.toCreditSummary();
            });
            tst.present();
	  				console.info(res);
	  			})
	  			.catch(err=>{
	  				load.dismiss();
            let tst = self.toast.create({
              message: 'An error occurred.',
              duration: 3000,
              position: 'top',
              cssClass:`fail`
            });
            tst.onDidDismiss(data=>{
              self.toCreditSummary();
            });
            tst.present();
	  				console.warn(err);
	  			})
	}

  logout(){
    localStorage.removeItem('userData');
    window.location.href = '/#/login';
    return 0;
  }



}
