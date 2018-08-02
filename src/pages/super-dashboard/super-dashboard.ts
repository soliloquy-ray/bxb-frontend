import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';
/**
 * Generated class for the SuperDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

interface creditSummary {
	companyName,
	companyCode
	memberEmployees,
	activeEmployees,
	totalCreditAvailment,
	principalOutstanding,
	maxPortfolio,
	riskRatio,
	membershipYears
};

@IonicPage()
@Component({
  selector: 'page-super-dashboard',
  templateUrl: 'super-dashboard.html',
})
export class SuperDashboardPage {

	deets: string = `<a href='/#/loans'>Details&nbsp;&gt;</a>`;
	isMobile : boolean = mobilecheck();
	companies : creditSummary[] = [{
		companyName:"6805 Ayala Avenue Condominium Corporation",
		companyCode:"001",
		memberEmployees:13,
		activeEmployees:12,
		totalCreditAvailment:16,
		principalOutstanding:69141.67,
		maxPortfolio:177356.02,
		riskRatio:38.98,
		membershipYears:0
	},{
		companyName:"BXB Employee Solutions Corp",
		companyCode:"002",
		memberEmployees:5,
		activeEmployees:4,
		totalCreditAvailment:4,
		principalOutstanding:97000,
		maxPortfolio:200000,
		riskRatio:48.5,
		membershipYears:0
	},{
		companyName:"Thirty One Digital Media Solutions Inc.",
		companyCode:"31D",
		memberEmployees:26,
		activeEmployees:9,
		totalCreditAvailment:6,
		principalOutstanding:64000.00,
		maxPortfolio:311000.00,
		riskRatio:20.58,
		membershipYears:0
	},{
		companyName:"test company",
		companyCode:"test1",
		memberEmployees:26,
		activeEmployees:0,
		totalCreditAvailment:0,
		principalOutstanding:0.00,
		maxPortfolio:0.00,
		riskRatio:0.00,
		membershipYears:0
	},{
		companyName:"Mermida's Company",
		companyCode:"123",
		memberEmployees:5,
		activeEmployees:1,
		totalCreditAvailment:0,
		principalOutstanding:0.00,
		maxPortfolio:50000.00,
		riskRatio:0.00,
		membershipYears:0
	}];

	hdrTitlesC = {
		companyName:"Company Name",
		companyCode:"Company Code",
		memberEmployees:"Member Employees",
		activeEmployees:"Active Employees",
		totalCreditAvailment:"Total Credit Availment",
		principalOutstanding:"Total Principal Outstanding",
		maxPortfolio:"Company Maximum Portfolio",
		riskRatio:"Risk Ratio",
		membershipYears:"Years of Membership"
	};
	sampKeysC = Object.keys(this.companies[0]);
	formatsC = {
		'principalOutstanding':'number',
		'maxPortfolio':'number',
		'riskRatio':'number'
	};

	bxbPortfolio = {
		numberOfCompanies:6,
		totalCreditAvailment:102000,
		companiesByIndustry:0,
		companiesByExposure:0,
		actualCompanyExposure:240141.67,
		nplRatio:0,
		npl:0,
		borrowersByGender:0
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuperDashboardPage');
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'dashboard';
  }

  ionViewWillLeave(){
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  toCreditSummary(){
  	this.navCtrl.setRoot(LoansPage,{},{animate:true, direction:"top"});
  }

}
