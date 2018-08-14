import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the TermsModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-modal',
  templateUrl: 'terms-modal.html',
})
export class TermsModalPage {

  interactive: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.interactive = this.navParams.get('int');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsModalPage');
  }

  cancel(){
    this.view.dismiss('cancel');
  }

  proceed(){
  	this.view.dismiss('proceed');
  }

}
