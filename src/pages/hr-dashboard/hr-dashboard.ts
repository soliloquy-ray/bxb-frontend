import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';

import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';
/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-hr-dashboard',
  templateUrl: 'hr-dashboard.html',
})
export class HrDashboardPage {

	deets: string = `<a href='/#/loans'>Details&nbsp;&gt;</a>`;
	deets2: string = `2018`;
	deets3: string = `&nbsp;`;
	isMobile : boolean = mobilecheck();
  	env = config[location.origin].backend;
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private http: Http, private loader: LoadingController) {
  }

  ionViewDidEnter() {
  	let self = this;
  	this.menu.close();
  	localStorage.page = 'dashboard';

  	this.getLoansByStatus(1).then(res=>{
  		self.credits = res;
  	});
  }

  getLoansByStatus(stat):Promise<any>{
	let load = this.loader.create({
	  spinner: 'crescent',
	  dismissOnPageChange: true,
	  showBackdrop: true,
	  content: `Processing...`,
	  enableBackdropDismiss:false
	});
	load.present();
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=hr_get_loan_by_status`,{status:stat}, rq)
			.toPromise()
			.then(res=>{
				load.dismiss();
				console.log(res.json());
				return res.json();
			})
			.catch(err=>{
				load.dismiss();
				console.warn(err);
				return {};
			})
	);
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
