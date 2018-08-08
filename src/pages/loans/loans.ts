import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, Modal, LoadingController } from 'ionic-angular';

import { DisclosureStatementPage } from '../disclosure-statement/disclosure-statement';
import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';
/**
 * Generated class for the LoansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

interface pendingLoan {
	firstName,
	lastName,
	transID,
	inceptionDate,
	term,
	amt,
	purpose
};

@IonicPage()
@Component({
  selector: 'page-loans',
  templateUrl: 'loans.html',
})
export class LoansPage {

	isMobile : boolean = mobilecheck();
	loanStatus = 'pending';
	mod:Modal;
  	env = config[location.origin].backend;
	loans = {
		'pending':[
		/*{
			'firstName':'George Miguel',
			'lastName':'Winternitz',
			'transID':'2',
			'inceptionDate':'04-15-2018',
			'term':12,
			'amt':'5000',
			'purpose':'Help a Person'
		},{
			'firstName':'George Miguel',
			'lastName':'Winternitz',
			'transID':'5',
			'inceptionDate':'04-27-2018',
			'term':4,
			'amt':'32000',
			'purpose':'Help a Person'
		},{
			'firstName':'George Miguel',
			'lastName':'Winternitz',
			'transID':'27',
			'inceptionDate':'07-11-2018',
			'term':14,
			'amt':'12500',
			'purpose':'Emergency Fund'
		},*/
		],
		'approved':[],
		'cancel':[],
		'completed':[]

	};

	hdrTitles = {
		'userData.Name_First':'First Name',
		'userData.Name_Last':'Last Name',
		'LoanID':'Transaction ID',
		'applicationDate':'Date of Inception',
		'term':'Term',
		'principal':'Amount',
		'purpose':'Purpose'
	};
	sampKeys = ['userData.Name_First','userData.Name_Last','LoanID','applicationDate','term','principal','purpose'];
	formats = {
		'principal':'currency',
		'interest':'percent',
		'term':'number',
		'userData.Name_First':'nested',
		'userData.Name_Last':'nested'
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
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
	load = this.loader.create({
	  spinner: 'crescent',
	  dismissOnPageChange: true,
	  showBackdrop: true,
	  content: `Processing...`,
	  enableBackdropDismiss:false
	});
	searched : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private modal: ModalController, private http: Http, private loader: LoadingController) {
  	this.searched = this.loans;
  }

  ionViewDidEnter() {
  	let self = this;
  	this.menu.close();
  	localStorage.page = 'creditsum';
	this.load.present();
  	let pr1 = this.getLoansByStatus(1).then(rs=>{
    	self.loans.pending = rs;
    	return rs;
    });
   

    let pr2 = this.getLoansByStatus(2).then(rs=>{
    	self.loans.approved = rs;
    	return rs;
    });

    let pr3 = this.getLoansByStatus(4).then(rs=>{
    	self.loans.cancel = rs;
    	return rs;
    });

    Promise.all([pr1,pr2,pr3]).then(()=>{
    	this.load.dismiss();
    });
  }

  test(e:{index:number,val:any}){
  	this.showModal(e);
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

  ionViewWillLeave(){
  	try{
  		this.mod.dismiss();
  	}catch(e){
  		console.warn(e);
  	}
  }
  
  reorient($event){
  	this.isMobile = mobilecheck();
  }

  segmentChanged($event){
  	//console.info($event);
  }

  search($event){
  	let val = $event.target.value.toLowerCase();
  	if(val.trim() == ""){
  		this.searched = this.loans;
  	}
  	else{
  		let lns = this.loans.pending.filter(a=>{if(a.amt.toLowerCase().indexOf(val) > -1 || a.firstName.toLowerCase().indexOf(val) > -1 || a.inceptionDate.toLowerCase().indexOf(val) > -1 || a.lastName.toLowerCase().indexOf(val) > -1 || a.purpose.toLowerCase().indexOf(val) > -1 || a.term.toString().toLowerCase().indexOf(val) > -1 || a.transID.toLowerCase().indexOf(val) > -1) return a;});
  		console.log(lns);
  		this.searched = {'pending':lns};
  	}

  }

  showModal(i:{index:number,val:any}){
  	this.mod = this.modal.create(DisclosureStatementPage,{data:this.loans.pending[i.index], payments:this.payments, user:i.val.userData},{cssClass:`whitemodal ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

}
