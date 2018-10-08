import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';

import { DragScrollComponent } from 'ngx-drag-scroll';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';
import { SoaFilterModalPage } from '../soa-filter-modal/soa-filter-modal';
import { AddHrPage } from '../add-hr/add-hr';
/**
 * Generated class for the AdminCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {

	mod: Modal;
	pendingMembers = [];
	isMobile : boolean = mobilecheck();
	@ViewChildren(DragScrollComponent) ds : QueryList<DragScrollComponent>;
	cmpny : any = [
		
	];

	hdrTitles = {
		'companyName':'Company Name',
		'companyCode':'Company Code',
		'totalEmployees':'Total Number Employees Members',
		'activeAvailments':'Active Availments'
	};
	sampKeys = ['companyName','companyCode','totalEmployees','activeAvailments'];
	formats = {
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"text",
			"title":"View SOA"
		},
		{
			"icon":"ios-person-add",
			"class":"text",
			"title":"Add HR"
		},
		{
			"icon":"ios-people",
			"class":"text",
			"title":"Employees"
		},
		{
			"icon":"md-lock",
			"class":"text",
			"title":"Hold"
		},
		{
			"icon":"ios-close-circle",
			"class":"text",
			"title":"Delete"
		}
	];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private db: DbProvider) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'companies';
  	this.db.getCompanyByID(null).then(res=>{
  		this.cmpny = res;
  	}).catch(console.warn);
  }

  ionViewWillLeave(){
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  showModal(i){
  	this.mod = this.modal.create(EmployeeInfoModalPage,{data:i},{cssClass:`whitemodal sm ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

  showSOA(i){
  	this.mod = this.modal.create(SoaFilterModalPage,{id:i},{cssClass:`whitemodal xs  ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

  ngAfterViewInit(){
  	this.ds.forEach(i=>{
  		i.snapOffset = 85;
  		i.scrollbarHidden = true;
  	});
  }

  addHR(cid){
  	this.navCtrl.setRoot(AddHrPage,{cid:cid},{animate:true, direction:"top"});
  }

  doAction(i:{index,val}){
  	let v = JSON.parse(i.val);
  	console.log(i,v);
  	switch (i.index) {
  		case 0:
  			this.showSOA(v.CompanyID);
  			// code...
  			break;
  		case 1:
  			this.addHR(v.CompanyID);
  			break;
  		
  		default:
  			// code...
  			break;
  	}
  }

}
