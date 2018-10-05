import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, AlertController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';
import { AdminPretermFormPage } from '../admin-preterm-form/admin-preterm-form';

import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-preterm',
  templateUrl: 'preterm.html',
  providers: [DbProvider]
})
export class PretermPage {

	preterm = [
	];

	hdrTitles = {
		'userData.Name_First':'First Name',
		'userData.Name_Last':'Last Name',
		'LoanID':'Loan Identification',
		'userData.Company':'Company',
		'term':'Terms',
		'principal':'Amount',
		'reason':'Reason',
		'status':'Status'
	};
	sampKeys = ['userData.Name_First','userData.Name_Last','LoanID','userData.Company','term','principal','reason','status'];
	formats = {
		'LoanID':'number',
		'term':'number',
		'principal':'currency',
		'userData.Name_First':'nested',
		'userData.Name_Last':'nested',
		'userData.Company':'nested'
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
		},
		{
			"icon":"ios-thumbs-up",
			"class":"approve"
		},
		{
			"icon":"ios-thumbs-down",
			"class":"reject"
		}
	];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private db: DbProvider, private loader: LoadingController, private modal: ModalController, private alert: AlertController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'preterm';

  	
	let load = this.loader.create({
	  spinner: 'crescent',
	  dismissOnPageChange: true,
	  showBackdrop: true,
	  content: `Loading Data...`,
	  enableBackdropDismiss:false
	});
	load.present();
  	this.db.getLoansByStatus(4).then(res=>{
  		this.preterm = res;
  		load.dismiss();
  	}).catch(console.warn);
  }


  ionViewWillLeave(){
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

  toCreditSummary(){
  	this.navCtrl.setRoot(LoansPage,{},{animate:true, direction:"top"});
  }

  pretermActs(i:{index,val}){
  	switch(i.index){
  		case 0:
		  	let data = JSON.parse(i.val);
		  	let user = data.userData;
		  	delete data.userData;
		  	let modal = this.modal.create(AdminPretermFormPage,{data:data,user:user},{cssClass:`whitemodal sm`});
		  	modal.present();
		  	break;
		case 1:
  			this.showApproveAlert(JSON.parse(i.val));
			break;
		case 2: 
			break;
		default: break;
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
          /*handler: data => {
          	let ld = self.loader.create({
      		      spinner: 'crescent',
      		      dismissOnPageChange: true,
      		      showBackdrop: true,
      		      content: `Processing...`,
      		      enableBackdropDismiss:false
      			});
			      ld.present();
            self.db.updateLoanStatus(3,id['LoanID']).then(res=>{
              // set up sched of payments 
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
              // end of setup  

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
		*/
        } // end of button
      ]
    });
    conf.present();

  }



}
