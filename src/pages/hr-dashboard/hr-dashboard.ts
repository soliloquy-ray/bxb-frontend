import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HrDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface creditSummary {
	transID : number,
	inceptionDate: string,
	employeeName: string,
	amt: string,
	purpose: string
};

@IonicPage()
@Component({
  selector: 'page-hr-dashboard',
  templateUrl: 'hr-dashboard.html',
})
export class HrDashboardPage {

	deets: string = `<a href='/#/credit-loan'>Details</a>&nbsp;&gt;`;
	deets2: string = `2018`;
	deets3: string = `&nbsp;`;
	credits: creditSummary[] = [{
		transID:2,
		inceptionDate: '2018-04-15',
		employeeName: 'George Miguel Winternitz',
		amt: '5,000.00',
		purpose: 'Help a Person'
	},{
		transID:5,
		inceptionDate: '2018-04-27',
		employeeName: 'George Miguel Winternitz',
		amt: '32,000.00',
		purpose: 'Help a Person'
	}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HrDashboardPage');
  }

}
