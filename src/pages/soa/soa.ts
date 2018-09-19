import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, Modal } from 'ionic-angular';

import { LoansPage } from '../loans/loans';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';

@IonicPage()
@Component({
  selector: 'page-soa',
  templateUrl: 'soa.html'
})
export class SoaPage {

	soas = [
		{
			pdf:'PDF',
			billPeriod:'07-30-2018',
			amt:14929.16,
			soaNo:'2018835',
			refNo:'240665CHQ',
			status:'paid'
		},
		{
			pdf:'PDF',
			billPeriod:'07-15-2018',
			amt:16739.57,
			soaNo:'2018834',
			refNo:'240642CHQ',
			status:'paid'
		},
		{
			pdf:'PDF',
			billPeriod:'08-30-2018',
			amt:479.16,
			soaNo:'2018847',
			refNo:'',
			status:'not paid'
		}
	];

	hdrTitles = {
		'pdf':'PDF',
		'billPeriod':'Statement Date',
		'amt':'Amount Due',
		'soaNo':'SOA Ref #',
		'refNo':'Ref #',
		'status':'Status'
	};
	sampKeys = ["pdf","billPeriod","amt","soaNo","refNo","status"];
	formats = {
		'amt':'currency',
		'status':'textDecorated'
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
		}
	];

	mod:Modal;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, /*private db: DbProvider, private loader: LoadingController,*/ private modal: ModalController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'soa';
  }


  ionViewWillLeave(){
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

  toCreditSummary(){
  	this.navCtrl.setRoot(LoansPage,{},{animate:true, direction:"top"});
  }

  doAction(i:{index:number,val:any}){
  	this.showSOA(JSON.parse(i.val));
  }

  showSOA(i){
  	this.mod = this.modal.create(StatementOfAccountPage,{data:i},{cssClass:`whitemodal  ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

}
