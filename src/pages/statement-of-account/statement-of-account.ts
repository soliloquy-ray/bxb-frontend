import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';
/**
 * Generated class for the StatementOfAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statement-of-account',
  templateUrl: 'statement-of-account.html',
})
export class StatementOfAccountPage {		
	currentBalance = [{
			"transDate":"2018-04-15",
			"creditAvailmentNumber":4,
			"memberID":"00202",
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"seqNo":"9/12",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":479.16,
			"status":"Active"
		},{
			"transDate":"2018-08-07",
			"creditAvailmentNumber":41,
			"memberID":"00252",
			"firstName":"Ray",
			"lastName":"Santos",
			"seqNo":"1/12",
			"empID":"123",
			"transType":"Credit Availment",
			"repaymentAmt":2395.83,
			"status":"Active"
		},
	];	

	prevBalance = [{
			"transDate":"2018-04-15",
			"creditAvailmentNumber":4,
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"seqNo":"7/12",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":479.16,
			"status":"Active"
		},{
			"transDate":"2018-04-27",
			"creditAvailmentNumber":8,
			"firstName":"George Miguel",
			"lastName":"Winternitz",
			"seqNo":"4/4",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":8400,
			"status":"Preterminated"
		},{
			"transDate":"2018-04-15",
			"creditAvailmentNumber":4,
			"firstName":"Ray",
			"lastName":"Santos",
			"seqNo":"8/12",
			"empID":"18-002",
			"transType":"Credit Availment",
			"repaymentAmt":479.16,
			"status":"Active"
		}
	];
	data;
	cid;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private db: DbProvider) {
  	this.data = this.navParams.get('data') || [];
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad StatementOfAccountPage');

  	this.db.getSOAPaySchedByDate(this.data.billPeriod,this.data.CompanyID).then(res=>{
  		this.prevBalance = [];
  		this.currentBalance = res.json();
  	}).catch(console.warn);
  }

  print(){
  	window.print();
  }

  close(){
  	this.view.dismiss();
  }
}
