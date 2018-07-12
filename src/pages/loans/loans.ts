import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

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
	loans = {
		'pending':[
		{
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
		},
		]
	};
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoansPage');
  }

  ionViewWillLeave(){
  	this.menu.close();
  }
  
  reorient($event){
  	this.isMobile = mobilecheck();
  }

  segmentChanged($event){
  	//console.info($event);
  }

}
