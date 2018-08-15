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

	preterm = [
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
		}
	];

	hdrTitles = {
		'firstName':'First Name',
		'lastName':'Last Name',
		'loanIdentification':'Loan Identification',
		'company':'Company',
		'terms':'Terms',
		'amt':'Amount',
		'reason':'Reason',
		'status':'Status'
	};
	sampKeys = ["firstName","lastName","loanIdentification","company","terms","amt","reason","status"];
	formats = {
		'loanIdentification':'number',
		'terms':'number',
		'amt':'currency'
	};
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private db: DbProvider, private loader: LoadingController) {
  }

  ionViewDidEnter() {
  	let self = this;
  	this.menu.close();
  	localStorage.page = 'preterm';

  	/*
	let load = this.loader.create({
	  spinner: 'crescent',
	  dismissOnPageChange: true,
	  showBackdrop: true,
	  content: `Loading Data...`,
	  enableBackdropDismiss:false
	});
	load.present();
  	this.db.getLoansByStatus(1).then(res=>{
  		return res;
  	}).then(r=>{
  		self.db.getLoansByStatus(2).then(rs=>{
  			self.credits = r.concat(rs);
  			load.dismiss().catch(()=>{});
  		})
  	});*/
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
