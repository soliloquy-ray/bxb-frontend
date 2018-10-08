import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController, LoadingController, AlertController, ToastController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';

//import { DragScrollComponent } from 'ngx-drag-scroll';
import { DisclosureStatementPage } from '../disclosure-statement/disclosure-statement';

import { AppProvider } from '../../providers/app/app';
import { DbProvider } from '../../providers/db/db';

import { LoanComponent } from '../../components/loan/loan';
import { SortableTableComponent } from '../../components/sortable-table/sortable-table';

@IonicPage()
@Component({
  selector: 'page-admin-credit',
  templateUrl: 'admin-credit.html',
  providers: [DbProvider]
})
export class AdminCreditPage {

	mod: Modal;
	pendingMembers = [];
	//@ViewChildren(DragScrollComponent) ds : QueryList<DragScrollComponent>;
	@ViewChild('p_loan') p_loan: LoanComponent;
	@ViewChildren(SortableTableComponent) srt: Array<SortableTableComponent>;
	loans = {

		"pending":[],
	'completedLoans' :  [],
	'activeLoans' :  [],
	npLoans :  [
		{
			company:"Thirty One Digital Media Solutions Inc.",
			totalCreditAvailment:3,
			amt:11941.66,
			companyID:1
		},
		{
			company:"BXB Employee Solutions Corp",
			totalCreditAvailment:1,
			amt:17758.32,
			companyID:2
		},
		{
			company:"6805 Ayala Avenue Condominium Corporation",
			totalCreditAvailment:16,
			amt:31668.73,
			companyID:3
		}
	]
};


	hdrTitles = {
		'userData.Name_First':'First Name',
		'userData.Name_Last':'Last Name',
		'LoanID':'Loan Identification',
		'userData.Company':'Company',
		'term':'Terms',
		'processFund':'Net',
		'principal':'Amount',
		'userData.Payroll_Account':'Payroll Acct',
		'userData.Bank_Name':'Bank',
		'purpose':'Purpose'
	};
	sampKeys = ['userData.Name_First','userData.Name_Last','LoanID','userData.Company','term','processFund','principal','userData.Payroll_Account','userData.Bank_Name','purpose'];
	formats = {
		'principal':'currency',
		'processFund':'currency',
		'term':'number',
		'userData.Name_First':'nested',
		'userData.Name_Last':'nested',
		'userData.Payroll_Account':'nested',
		'userData.Bank_Name':'nested',
		'userData.Company':'nested'
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
		},
		{
			"icon":"ios-thumbs-up",
			"class":"approve-loan"
		}
	];
	act_actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
		},
		{
			"icon":"ios-thumbs-down",
			"class":"npl"
		}
	];
	payments = [
		{
			"paymentDate":"06-15-2018",
			"paymentNum":1,
			"amt":8400,
			"bal":25200
		},
		{
			"paymentDate":"06-30-2018",
			"paymentNum":2,
			"amt":8400,
			"bal":16800
		},
		{
			"paymentDate":"07-15-2018",
			"paymentNum":3,
			"amt":8400,
			"bal":8400
		},
		{
			"paymentDate":"07-30-2018",
			"paymentNum":4,
			"amt":8400,
			"bal":0
		}
	];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private db: DbProvider, private app: AppProvider, private loader: LoadingController, private alert: AlertController, private toast: ToastController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'creditsum';
  	this.initLoans();
  }

  initLoans(){
  	let self = this;
  	let load = this.loader.create({
		      spinner: 'crescent',
		      dismissOnPageChange: true,
		      showBackdrop: true,
		      content: `Loading Pending loans`,
		      enableBackdropDismiss:false
			});
	load.present();
  	let pr1 = this.db.getLoansByStatus(1, null).then(rs=>{
    	self.loans.pending = rs.map(a=>{
        let x = a;
        let ln = self.app.getLoanValues(a.principal,a.term);
        x.processFund = ln.netCashout;
        return x;
      });
      load.setContent('Loading Active loans');
    	console.log(self.loans.pending);
    	return rs;
    });
   

    let pr2 = this.db.getLoansByStatus(2, null).then(rs=>{
    	self.loans.activeLoans = rs.map(a=>{
        let x = a;
        let ln = self.app.getLoanValues(a.principal,a.term);
        x.processFund = ln.netCashout;
        return x;
      });
      load.setContent('Compiling');
    	console.log(self.loans.activeLoans);
    	return rs;
    });

    Promise.all([pr1,pr2]).then(()=>{
    	load.dismiss().catch(()=>{});
    });
  }
  
  isMobile(){
  	return localStorage.view == "mobile";
  }

  showModal(i){
  	this.mod = this.modal.create(EmployeeInfoModalPage,{data:i},{cssClass:`whitemodal sm ${this.isMobile() ? "mobile" : ""}`});
  	this.mod.present();
  }

  ngAfterViewInit(){
  /*	this.ds.forEach(i=>{
  		i.snapOffset = 85;
  		i.scrollbarHidden = true;
  	});*/
  }
	resize(e) {
        console.log(e);
        this.srt.forEach((v,i)=>{
	  		v.isMobile();
	  	});
    }

  doAction(i:{index:number,val:any}){
  	if(i.index == 0){
  		this.showDisclosureModal(JSON.parse(i.val), true);
  	}else if(i.index == 1){
  		this.showApproveAlert(JSON.parse(i.val));
  	}
  }

  doActiveAction(i:{index:number,val:any}){
  	if(i.index == 0){
  		this.showDisclosureModal(JSON.parse(i.val));
  	}else if(i.index == 1){
  		this.showNPLAlert(JSON.parse(i.val)['LoanID']);
  	}
  }

  /*showDisclosureModal(i){
  	this.p_loan.p = i.principal;
  	this.p_loan.t = i.term;
  	let dtt = this.p_loan.getDates();
  	console.log(this.p_loan);
  	this.mod = this.modal.create(DisclosureStatementPage,{data:i, payments:this.payments, user:i['userData']},{cssClass:`whitemodal ${this.isMobile() ? "mobile" : ""}`});
  	this.mod.present();
  }*/

  showDisclosureModal(i,fe:boolean = false){
  	console.log(i);
  	let ind = i;
  	let self = this;
    this.p_loan.p = ind.principal;
    this.p_loan.t = ind.numberPaydays;
    this.p_loan.sdate = ind.applicationDate;
    let lndta = this.p_loan.getLoan();
    ind.loan = lndta;

    /** USES FRONTEND COMPUTATION **/
    if(fe){
      this.p_loan.p = ind.principal;
      this.p_loan.t = ind.numberPaydays;
      this.p_loan.sdate = ind.applicationDate;
      let lndta = this.p_loan.getLoan();
      ind.loan = lndta;
  	  this.p_loan.getDates(ind.applicationDate).then(dt=>{
  	  	self.mod = this.modal.create(DisclosureStatementPage,{data:ind, payments:dt, user:ind.userData},{cssClass:`whitemodal ${self.isMobile() ? "mobile" : ""}`});
  	  	self.mod.present();
    	});
    }
    else{ // stored db values      
      this.db.getSchedofPayment(i['LoanID']).then(res=>{
        console.log(res);
        self.mod = self.modal.create(DisclosureStatementPage,{data:ind,payments:res,user:ind.userData},{cssClass:`whitemodal ${self.isMobile() ? "mobile" : ""}`});
        self.mod.present();
      }).catch(console.warn);
    }
  }

  showApproveAlert(id){
  	let self = this;
  	console.log(id);
  	let conf = this.alert.create({
      title: 'Reference No.',
      inputs: [
        {
          name: 'refno',
          placeholder: 'Reference Number'
        },
      ],
      buttons: [
        {
          text: 'Close',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Proceed',
          handler: data => {
          	let ld = self.loader.create({
      		      spinner: 'crescent',
      		      dismissOnPageChange: true,
      		      showBackdrop: true,
      		      content: `Processing...`,
      		      enableBackdropDismiss:false
      			});
			      ld.present();
            self.db.updateLoanStatus(2,id['LoanID']).then(res=>{
              /* set up sched of payments */
              let ind = id;
              let self = this;
              self.p_loan.p = ind.principal;
              self.p_loan.t = ind.numberPaydays;
              self.p_loan.sdate = ind.applicationDate;
              let lndta = self.p_loan.getLoan();
              ind.loan = lndta;
              self.p_loan.getDates(ind.applicationDate).then(dt=>{
                console.log(dt);
                self.db.addSchedofPayment(dt,id['LoanID']).then(console.info).catch(console.warn);
              }).catch(console.warn);
              /* end of setup  */

              self.app.sendLoanApproved(ind.userData.mobile)
                  .then(console.log)
                  .catch(console.info);

            	let toast = this.toast.create({
      				  message: 'Loan Approved',
      				  duration: 3000,
      				  position: 'top',
      				  cssClass:`success`
      				});
				      toast.present();
            	ld.dismiss().catch(()=>{});
            	self.initLoans();
            	console.log(res);
            }).catch(err=>{
            	let toast = this.toast.create({
      				  message: 'Loan Approval Failed',
      				  duration: 3000,
      				  position: 'top',
      				  cssClass:`fail`
      				});
				      toast.present();
            	ld.dismiss().catch(()=>{});
            	self.initLoans();
            	console.warn(err);
            });
          
          } // end of button handler

        } // end of button
      ]
    });
    conf.present();
  }

  showNPLAlert(id){
  	let self = this;
  	console.log(id);
  	let conf = this.alert.create({
      title: 'Flag Loan',
      message: 'Are you sure you want to flag this loan?',
      buttons: [
        {
          text: 'Close',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Proceed',
          handler: data => {
          	let ld = self.loader.create({
		      spinner: 'crescent',
		      dismissOnPageChange: true,
		      showBackdrop: true,
		      content: `Processing...`,
		      enableBackdropDismiss:false
			});
			ld.present();
            self.db.updateLoanStatus(4,id).then(res=>{
            	let toast = this.toast.create({
				  message: 'Loan Cancelled',
				  duration: 3000,
				  position: 'top'
				});
				toast.present();
            	ld.dismiss().catch(()=>{});
            	self.initLoans();
            	console.log(res);
            }).catch(err=>{
            	let toast = this.toast.create({
				  message: 'Loan Cancellation Failed',
				  duration: 3000,
				  position: 'top',
				  cssClass:`fail`
				});
				toast.present();
            	ld.dismiss().catch(()=>{});
            	self.initLoans();
            	console.warn(err);
            });
          }
        }
      ]
    });
    conf.present();
  }


}
