import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';

import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-flagging',
  templateUrl: 'flagging.html',
  providers: [DbProvider]
})
export class FlaggingPage {

	flagged = [
		{
			firstName:"Michaelle",
			lastName:"Benedicto",
			totalCreditAvailment:0,
			company:"6805 Ayala Avenue Condominium Corporation",
			amt:0,
			status:"Pending",
			reason:"AWOL",
			comment:"for testing only"
		},
		{
			firstName:"Armel",
			lastName:"Arancillo",
			totalCreditAvailment:1,
			company:"6805 Ayala Avenue Condominium Corporation",
			amt:12543.75,
			status:"Approved",
			reason:"Memo Given",
			comment:"for testing only"
		},
		{
			firstName:"Armel",
			lastName:"Arancillo",
			totalCreditAvailment:1,
			company:"6805 Ayala Avenue Condominium Corporation",
			amt:17721.50,
			status:"Approved",
			reason:"AWOL",
			comment:"Test Comment"
		}
	];

	hdrTitles = {
		'firstName':'First Name',
		'lastName':'Last Name',
		'totalCreditAvailment':'Total Credit Availment',
		'company':'Company',
		'amt':'Amount',
		'status':'Status',
		'reason':'Reason',
		'comment':'Comment'
	};
	sampKeys = ["firstName","lastName","totalCreditAvailment","company","amt","status","reason","comment"];
	formats = {
		'totalCreditAvailment':'number',
		'amt':'currency'
	};
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController/*, private db: DbProvider, private loader: LoadingController*/) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'flagging';

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
