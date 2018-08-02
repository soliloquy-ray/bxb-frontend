import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, MenuController } from 'ionic-angular';

import { DisclosureStatementPage } from '../disclosure-statement/disclosure-statement';
/**
 * Generated class for the EmployeeLoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

interface pendingLoan {
	transID,
	inceptionDate,
	creditAvailNumber,
	rate,
	term,
	amt,
	purpose,
	repaid
};

@IonicPage()
@Component({
  selector: 'page-employee-loans',
  templateUrl: 'employee-loans.html',
})
export class EmployeeLoansPage {

	outstandingCredit:number = 0;
	availableCredit: number = 50000;isMobile : boolean = mobilecheck();
	loanStatus = 'pending';
	mod:Modal;
	expanded = 0;
	loans = {
		'pending':[
		{
			'transID':'0',
			'inceptionDate':'07-30-2018',
			'creditAvailNumber':'48',
			'rate':0.025,
			'term':10,
			'amt':1000,
			'purpose':'Major Purchase',
			'repaid':0
		},
		{
			'transID':'1',
			'inceptionDate':'07-30-2018',
			'creditAvailNumber':'49',
			'rate':0.025,
			'term':5,
			'amt':30000,
			'purpose':'Help out a friend',
			'repaid':0.3
		},
		{
			'transID':'2',
			'inceptionDate':'08-01-2018',
			'creditAvailNumber':'47',
			'rate':0.025,
			'term':8,
			'amt':50000,
			'purpose':'Emergency Fund',
			'repaid':0.5
		}]
	};
	hdrTitles = {
		'transID':'Transaction ID',
		'inceptionDate':'Date of Inception',
		'creditAvailNumber':'Credit Availment Number',
		'rate':'Rate',
		'term':'Term',
		'amt':'Amount',
		'purpose':'Purpose',
		'repaid':'% Repaid'
	};
	sampKeys = Object.keys(this.loans.pending[0]);
	formats = {
		'amt':'currency',
		'rate':'percent',
		'term':'number',
		'repaid':'percent'
	};

	payments = [
		{
			"paymentDate":"06-15-2018",
			"paymentNum":1,
			"amt":8400,
			"bal":25200
		},
		{
			"paymentDate":"06-30-2018",
			"paymentNum":2,
			"amt":8400,
			"bal":16800
		},
		{
			"paymentDate":"07-15-2018",
			"paymentNum":3,
			"amt":8400,
			"bal":8400
		},
		{
			"paymentDate":"07-30-2018",
			"paymentNum":4,
			"amt":8400,
			"bal":0
		}
	];

  	userData = JSON.parse(localStorage.userData)[0];/*{
  		firstName:"Per",
  		middleName:"Sohn",
  		lastName:"McPherson",
		userName: "beexby",
		email: "user@email.com",
		companyCode: "CC2",
		employeeId: "BX17445Z",
		payrollAccount: "ABC1294FAS-15-AF1125",
		password: "Passerby",
		mobile: "9189101112"	
  	};*/

	searched : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController) {
  	this.searched = this.loans;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeLoansPage');
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'creditsum';
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  search($event){
  	this.expanded = 0;
  	let val = $event.target.value.toLowerCase();
  	if(val.trim() == ""){
  		this.searched = this.loans;
  	}
  	else{
  		let lns = this.loans.pending.filter(a=>{if(a.amt.toString().toLowerCase().indexOf(val) > -1 || a.creditAvailNumber.indexOf(val) > -1 || a.inceptionDate.toLowerCase().indexOf(val) > -1 || a.rate.toString().indexOf(val) > -1 || a.purpose.toLowerCase().indexOf(val) > -1 || a.term.toString().toLowerCase().indexOf(val) > -1 || a.transID.toLowerCase().indexOf(val) > -1 || a.repaid.toString().indexOf(val) > -1) return a;});
  		console.log(lns);
  		this.searched = {'pending':lns};
  	}

  }

  segmentChanged($event){
  	//console.info($event);
  }

  showModal(i){
  	this.userData.firstName = this.userData.Name_First;
  	this.userData.lastName = this.userData.Name_Last;
  	this.userData.age = this._calculateAge(this.userData.Birthday);
  	this.mod = this.modal.create(DisclosureStatementPage,{data:this.loans.pending[i], payments:this.payments, user:this.userData},{cssClass:`whitemodal ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

 /* expand(e){
  	let el = <HTMLElement>e.target.closest('ion-col.data');
  	let ex = <HTMLElement>el.querySelector('.expandable');
  	ex.className.toString().match(/expanded/);
  }*/

  expand(i){
  	if(this.expanded == i+1){
  		this.expanded = 0;
  	}else{
  		this.expanded = i+1;
  	}
  }

  _calculateAge(birthday):number{
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }

  sorter(a:Array<any>,e,t:boolean):Array<any>{
  	if(t){
  		return a.sort((a,b)=>{
	  		if(a[e] < b[e]) return -1;
	  		if(a[e] > b[e]) return 1;
	  		return 0;
	  	});
	}else{
  		return a.sort((a,b)=>{
	  		if(a[e] < b[e]) return 1;
	  		if(a[e] > b[e]) return -1;
	  		return 0;
	  	});
	}
  }

}
