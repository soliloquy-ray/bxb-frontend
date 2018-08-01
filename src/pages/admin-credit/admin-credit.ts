import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';
import { EditEmployeePage } from '../edit-employee/edit-employee';
import { AddEmployeePage } from '../add-employee/add-employee';

import { DragScrollComponent } from 'ngx-drag-scroll';
/**
 * Generated class for the AdminCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-admin-credit',
  templateUrl: 'admin-credit.html',
})
export class AdminCreditPage {

	mod: Modal;
	pendingMembers = [];
	isMobile : boolean = mobilecheck();
	@ViewChildren(DragScrollComponent) ds : QueryList<DragScrollComponent>;
	completedLoans : any = [
		{
			firstName:"byron",
			lastName:"secades",
			loanID:47,
			company:"Baked Studios",
			terms:5,
			net:4712.5,
			amt:5000,
			payroll:"00004",
			bank:"BDO",
			purpose:"Major Purchase",
			refNum:"12345"
		},
		{
			firstName:"Ray",
			lastName:"Santos",
			loanID:48,
			company:"BXB Employee Solutions Corp",
			terms:10,
			net:942.5,
			amt:1000,
			payroll:"1234567",
			bank:"BDO",
			purpose:"Emergency Fund",
			refNum:"test ref"
		}
	];
	activeLoans : any = [
		{
			firstName:"byron",
			lastName:"secades",
			loanID:47,
			company:"Baked Studios",
			terms:5,
			net:4712.5,
			amt:5000,
			payroll:"00004",
			bank:"BDO",
			purpose:"Major Purchase",
			refNum:"12345"
		},
		{
			firstName:"Ray",
			lastName:"Santos",
			loanID:48,
			company:"BXB Employee Solutions Corp",
			terms:10,
			net:942.5,
			amt:1000,
			payroll:"1234567",
			bank:"BDO",
			purpose:"Emergency Fund",
			refNum:"test ref"
		}
	];
	pendingLoans : any = [
		{
			firstName:"byron",
			lastName:"secades",
			loanID:47,
			company:"Baked Studios",
			terms:5,
			net:4712.5,
			amt:5000,
			payroll:"00004",
			bank:"BDO",
			purpose:"Major Purchase",
			refNum:"12345"
		},
		{
			firstName:"Ray",
			lastName:"Santos",
			loanID:48,
			company:"BXB Employee Solutions Corp",
			terms:10,
			net:942.5,
			amt:1000,
			payroll:"1234567",
			bank:"BDO",
			purpose:"Emergency Fund",
			refNum:"test ref"
		}
	];
	npLoans : any = [
		{
			company:"Thirty One Digital Media Solutions Inc.",
			totalCreditAvailment:3,
			amt:11941.66,
			companyID:1
		},
		{
			company:"BXB Employee Solutions Corp",
			totalCreditAvailment:1,
			amt:17758.32,
			companyID:2
		},
		{
			company:"6805 Ayala Avenue Condominium Corporation",
			totalCreditAvailment:16,
			amt:31668.73,
			companyID:3
		}
	];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'loans';
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
  		i.scrollbarHidden = true;
  	});
  }

}
