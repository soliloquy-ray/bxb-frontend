import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';

import { DbProvider } from '../../providers/db/db';
/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hr-dashboard',
  templateUrl: 'hr-dashboard.html',
  providers: [DbProvider]
})
export class HrDashboardPage {

	deets: string = `<a href='/#/hr/loans'>Details&nbsp;&gt;</a>`;
	deets2: string = `2018`;
	deets3: string = `&nbsp;`;
	credits = [];

	hdrTitles = {
		'LoanID':'Transaction ID',
		'applicationDate':'Date of Inception',
		'employeeName':'Employee Name',
		'principal':'Amount',
		'purpose':'Purpose',
	};
	sampKeys = ["LoanID","applicationDate","employeeName","principal","purpose"];
	formats = {
		'principal':'currency'
	};
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private db: DbProvider, private loader: LoadingController) {
  }

  ionViewDidEnter() {
  	let self = this;
  	this.menu.close();
  	localStorage.page = 'dashboard';
	let load = this.loader.create({
	  spinner: 'crescent',
	  dismissOnPageChange: true,
	  showBackdrop: true,
	  content: `Loading Data...`,
	  enableBackdropDismiss:false
	});
	load.present();
  	this.db.getLoansByStatus(1, localStorage.companyId).then(res=>{
  		return res;
  	}).then(r=>{
  		self.db.getLoansByStatus(2, localStorage.companyId).then(rs=>{
  			self.credits = r.concat(rs);
  			load.dismiss().catch(()=>{});
  		})
  	});
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
