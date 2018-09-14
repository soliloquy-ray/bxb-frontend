import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

declare var mobilecheck;

@IonicPage()
@Component({
  selector: 'page-preterm-application-modal',
  templateUrl: 'preterm-application-modal.html',
})
export class PretermApplicationModalPage {

	isMobile : boolean = mobilecheck();
	user: any = {name:'Ray Santos',empID:'123'};
	loan: any = {principal: 25000, id: 1};
	loanFee: number = 750;
	due: number = 26062.46;
	paySched : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController, private db: DbProvider) {
  	if(this.navParams.get('user')){
  		this.user = this.navParams.get('user');
  	}
  	if(this.navParams.get('loan')){
  		this.loan = this.navParams.get('loan');
  	}
  }

  ionViewDidLoad() {
  }

  ngAfterViewInit(){
  	this.db.getSchedofPayment(this.loan.id).then(res=>{
  		this.paySched = res;
    	console.log(this);
  	}).catch(console.warn);
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  print(){
  	window.print();
  }

  close(){
  	this.view.dismiss();
  }
}
