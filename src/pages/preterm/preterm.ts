import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';

import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-preterm',
  templateUrl: 'preterm.html',
  providers: [DbProvider]
})
export class PretermPage {

	preterm = [/*
		{
			firstName:"Michaelle",
			lastName:"Benedicto",
			loanIdentification:28,
			company:"6805 Ayala Avenue Condominium Corporation",
			terms:24,
			amt:0,
			reason:"Flag",
			status:"Flag"
		},
		{
			firstName:"Armel",
			lastName:"Arancillo",
			loanIdentification:29,
			company:"6805 Ayala Avenue Condominium Corporation",
			terms:24,
			amt:12543.75,
			reason:"Flag",
			status:"Flag"
		}*/
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private db: DbProvider, private loader: LoadingController) {
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

}
