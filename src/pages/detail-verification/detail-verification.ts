import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-detail-verification',
  templateUrl: 'detail-verification.html',
})
export class DetailVerificationPage {

	isMobile : boolean = mobilecheck();
	userData: any = {};
	valid: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  	this.userData = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailVerificationPage');
  }

  close(){
  	this.view.dismiss();
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  toHome(){
  	window.location.href = location.origin+"/#/login";
  }

}
