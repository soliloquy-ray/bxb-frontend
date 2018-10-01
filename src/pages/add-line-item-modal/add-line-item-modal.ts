import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-line-item-modal',
  templateUrl: 'add-line-item-modal.html',
})
export class AddLineItemModalPage {

	label:string = "";
	amt: number = 0;
	sub:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private view: ViewController) {
  	this.sub = this.navParams.get('sub') || false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLineItemModalPage');
  }

  close(){
  	this.view.dismiss({});
  }

  proceed(){
  	if(this.sub) this.amt *= -1;
  	this.view.dismiss({label:this.label,amt:this.amt});
  }

}
