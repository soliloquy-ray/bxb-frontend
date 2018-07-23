import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';

import { DragScrollComponent } from 'ngx-drag-scroll';
/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

	employees = [
		{
			"companyID":"18-003",
			"firstName":"Amanda",
			"lastName":"Winternitz",
			"email":"na@na",
			"netSalary":250000,
			"grossSalary":250000
		}
	];

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
	mod: Modal;
	pendingMembers = [];
	isMobile : boolean = mobilecheck();
	@ViewChildren(DragScrollComponent) ds : QueryList<DragScrollComponent>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'employees';
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
  	this.ds.forEach(i=>{
  		i.snapOffset = 85;
  		i.scrollbarHidden = true;  	});
  }

}
