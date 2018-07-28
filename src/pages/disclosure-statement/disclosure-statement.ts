import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Modal, ModalController } from 'ionic-angular';

import {TermsModalPage} from '../terms-modal/terms-modal';
/**
 * Generated class for the DisclosureStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-disclosure-statement',
  templateUrl: 'disclosure-statement.html',
})
export class DisclosureStatementPage {

	loan: any;
	isMobile : boolean = mobilecheck();
	payments: any;
	user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController) {
  	this.loan = this.navParams.get('data');
  	this.payments = this.navParams.get('payments');
  	this.user = this.navParams.get('user');
  	console.log(this.loan);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisclosureStatementPage');
  }

  close(){
  	this.view.dismiss();
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  openTermsModal(){
  	let mod = this.modal.create(TermsModalPage,{},{cssClass:"whitemodal"});
  	mod.present();
  }

  print(){
    window.print();
  }

}
