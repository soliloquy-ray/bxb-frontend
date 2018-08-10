import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Modal, ModalController } from 'ionic-angular';

import {TermsModalPage} from '../terms-modal/terms-modal';
/**
 * Generated class for the DisclosureStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disclosure-statement',
  templateUrl: 'disclosure-statement.html',
})
export class DisclosureStatementPage {

	loan: any;
	payments: any;
	user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController) {
  	this.loan = this.navParams.get('data');
  	this.payments = this.navParams.get('payments');
  	this.user = this.loan.userData;
  	console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisclosureStatementPage');
  }

  close(){
  	this.view.dismiss();
  }

  isMobile(){
    return localStorage.view == "mobile";
  }

  openTermsModal(){
  	let mod = this.modal.create(TermsModalPage,{},{cssClass:"whitemodal"});
  	mod.present();
  }

  print(){
    window.print();
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

}
