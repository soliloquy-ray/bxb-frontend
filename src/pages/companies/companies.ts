import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';

import { DragScrollComponent } from 'ngx-drag-scroll';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';
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
		{
			companyName:"6805 Ayala Avenue Condominium Corporation",
			companyCode:"001",
			totalEmployees:13,
			activeAvailments:102000,
			CompanyID:1
		},
		{
			companyName:"BXB Employee Solutions Corp",
			companyCode:"002",
			totalEmployees:5,
			activeAvailments:114000,
			CompanyID:2
		},
		{
			companyName:"Thirty One Digital Media Solutions Inc.",
			companyCode:"31D",
			totalEmployees:26,
			activeAvailments:64000,
			CompanyID:3
		},
		{
			companyName:"test company",
			companyCode:"test1",
			totalEmployees:26,
			activeAvailments:0,
			CompanyID:4
		},
		{
			companyName:"Mermida's Company",
			companyCode:"123",
			totalEmployees:5,
			activeAvailments:0,
			CompanyID:5
		},
		{
			companyName:"Baked Studios",
			companyCode:"Baked",
			totalEmployees:4,
			activeAvailments:0,
			CompanyID:6
		},
		{
			companyName:"Richelle Company",
			companyCode:"12345",
			totalEmployees:5,
			activeAvailments:0,
			CompanyID:7
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
  	this.mod = this.modal.create(StatementOfAccountPage,{data:i},{cssClass:`whitemodal  ${this.isMobile ? "mobile" : ""}`});
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

}
