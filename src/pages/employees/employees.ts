import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController, LoadingController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';
import { EditEmployeePage } from '../edit-employee/edit-employee';
import { AddEmployeePage } from '../add-employee/add-employee';

import { DbProvider } from '../../providers/db/db';

import { FlagReportModalPage } from '../flag-report-modal/flag-report-modal';
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html'
})
export class EmployeesPage {

	activeEmployees = [
		{
			"companyID":"18-002",
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"usedCredit":37000,
			"unusedCredit":13000,
			"creditLine":50000,
			"netSalary":250000,
			"grossSalary":250000
		},{
			"companyID":"11-123-3",
			"firstName":"Blue Terdst 3",
			"lastName":"Third",
			"usedCredit":0,
			"unusedCredit":50000,
			"creditLine":50000,
			"netSalary":50000,
			"grossSalary":70000
		}
	];
	hdrTitlesA = {
		'companyID':'Company ID',
		'firstName':'First Name',
		'lastName':'Last Name',
		'usedCredit':'Used Credit',
		'unusedCredit':'Unused Credit',
		'creditLine':'Credit Line',
		'netSalary':'Net Salary',
		'grossSalary':'Gross Salary'
	};
	sampKeysA = Object.keys(this.activeEmployees[0]);
	formatsA = {
		'usedCredit':'currency',
		'unusedCredit':'currency',
		'creditLine':'currency',
		'netSalary':'currency',
		'grossSalary':'currency'
	};

	employees = [
		{
			"companyID":"18-003",
			"firstName":"Amanda",
			"lastName":"Winternitz",
			"email":"na@na",
			"netSalary":250000,
			"grossSalary":250000
		},
		{
			"companyID":"18-006",
			"firstName":"Ray",
			"lastName":"Santos",
			"email":"aa@na",
			"netSalary":30000,
			"grossSalary":80000
		},
		{
			"companyID":"18-010",
			"firstName":"Winter",
			"lastName":"Nitz",
			"email":"wn@na",
			"netSalary":40000,
			"grossSalary":50000
		},
		{
			"companyID":"11-123-2",
			"firstName":"Blue Test 2",
			"lastName":"Second",
			"email":"blue.endaya@gmail.com",
			"netSalary":50000,
			"grossSalary":70000
		}
	];
	actions = [
		{
			"icon":"ios-contact",
			"class":"edit-employee"
		},
		{
			"icon":"md-flag",
			"class":"flag-employee"
		}
	];
	hdrTitlesE = {
		'companyID':'Company ID',
		'firstName':'First Name',
		'lastName':'Last Name',
		'email':'Email',
		'netSalary':'Net Salary',
		'grossSalary':'Gross Salary'
	};
	sampKeysE = Object.keys(this.employees[0]);
	formatsE = {
		'netSalary':'currency',
		'grossSalary':'currency'
	};

	flaggedEmployees = [
		{
			"companyID":"11-123-2",
			"firstName":"Blue Test 2",
			"lastName":"Second",
			"email":"blue.endaya@gmail.com",
			"netSalary":50000,
			"grossSalary":70000
		}
	];
	hdrTitlesF = {
		'companyID':'Company ID',
		'firstName':'First Name',
		'lastName':'Last Name',
		'email':'Email',
		'netSalary':'Net Salary',
		'grossSalary':'Gross Salary'
	};
	sampKeysF = Object.keys(this.flaggedEmployees[0]);
	formatsF = {
		'netSalary':'currency',
		'grossSalary':'currency'
	};
	mod: Modal;
	pendingMembers = [];
	isMobile : boolean = mobilecheck();

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private db: DbProvider, private loader: LoadingController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'employees';

  	this.initializeData();
  }

  async initializeData(){
  	let load =  this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Loading Data...`,
      dismissOnPageChange: true
    });
    load.present();
  	await this.db.getActiveMembers(localStorage.companyId).then(res=>{
  		this.activeEmployees = res.json();
  	});
  	await this.db.getAllMembers(localStorage.companyId).then(res=>{
  		this.employees = res.json();
  	});
  	load.dismiss();

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

  ngAfterViewInit(){
  }

  editEmp(dt){
  	this.navCtrl.setRoot(EditEmployeePage,{data:dt},{animate:true, direction:"top"});
  }

  addNew(){
  	this.navCtrl.setRoot(AddEmployeePage,{},{animate:true, direction:"top"});
  }

  doAction(e:{index,val}){
  	switch (e.index) {
  		case 0:
  			// code...
  			break;
  		case 1:
		  	let mod = this.modal.create(FlagReportModalPage, {id:e.val.companyID}, {cssClass:`whitemodal xxs  ${this.isMobile ? "mobile" : ""}`});
		  	mod.present();
  			break;
  		
  		default:
  			// code...
  			break;
  	}
  }

}
