import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Modal, ModalController, LoadingController, AlertController } from 'ionic-angular';

import { EmployeeInfoModalPage } from '../employee-info-modal/employee-info-modal';
import { EditEmployeePage } from '../edit-employee/edit-employee';
import { AddEmployeePage } from '../add-employee/add-employee';

import { DragScrollComponent } from 'ngx-drag-scroll';
import { DisclosureStatementPage } from '../disclosure-statement/disclosure-statement';
import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';
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
  	env = config[location.origin].backend;
	@ViewChildren(DragScrollComponent) ds : QueryList<DragScrollComponent>;
	;
	loans = {

		"pending":[],
	'completedLoans' :  [],
	'activeLoans' :  [],
	npLoans :  [
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
	]
};


	hdrTitles = {
		'userData.Name_First':'First Name',
		'userData.Name_Last':'Last Name',
		'LoanID':'Loan Identification',
		'userData.Company':'Company',
		'term':'Terms',
		'processFund':'Net',
		'principal':'Amount',
		'userData.Payroll_Account':'Payroll Acct',
		'userData.Bank_Name':'Bank',
		'purpose':'Purpose'
	};
	sampKeys = ['userData.Name_First','userData.Name_Last','LoanID','userData.Company','term','processFund','principal','userData.Payroll_Account','userData.Bank_Name','purpose'];
	formats = {
		'principal':'currency',
		'processFUnd':'currency',
		'term':'number',
		'userData.Name_First':'nested',
		'userData.Name_Last':'nested',
		'userData.Payroll_Account':'nested',
		'userData.Bank_Name':'nested',
		'userData.Company':'nested'
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
		},
		{
			"icon":"md-checkmark-circle-outline",
			"class":"approve-loan"
		}
	];
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private http: Http, private loader: LoadingController, private alert: AlertController) {
  }

  ionViewDidEnter() {
  	let self = this;
  	this.menu.close();
  	localStorage.page = 'loans';
  	let pr1 = this.getLoansByStatus(1).then(rs=>{
    	self.loans.pending = rs;
    	return rs;
    });
  }

  
  getLoansByStatus(stat):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=hr_get_loan_by_status`,{status:stat}, rq)
			.toPromise()
			.then(res=>{
				console.log(res.json());
				return res.json();
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})
	);
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

  doAction(i:{index:number,val:any}){
  	if(i.index == 0){
  		this.showDisclosureModal(i);
  	}else if(i.index == 1){
  		this.showApproveAlert();
  	}
  }

  showDisclosureModal(i:{index:number,val:any}){
  	this.mod = this.modal.create(DisclosureStatementPage,{data:this.loans.pending[i.index], payments:this.payments, user:i.val.userData},{cssClass:`whitemodal ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

  showApproveAlert(){
  	let conf = this.alert.create({
      title: 'Reference No.',
      inputs: [
        {
          name: 'refno',
          placeholder: 'Reference Number'
        },
      ],
      buttons: [
        {
          text: 'Close',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Proceed',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    conf.present();
  }


}
