import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ToastController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';
/**
 * Generated class for the SoaFilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soa-filter-modal',
  templateUrl: 'soa-filter-modal.html',
})
export class SoaFilterModalPage {

	
	months = {"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep","10":"Oct","11":"Nov","12":"Dec"};
	monthArr:Array<string> = [];
	yearArr:Array<string> = [];
	month = ("0"+(new Date().getMonth()+1).toString()).slice(-2);
	year = new Date().getFullYear();
	cid:number = 0;
	paydate;
	results;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private db: DbProvider, private modal: ModalController, private toast:ToastController) {
  	this.cid = this.navParams.get('id') || 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoaFilterModalPage');
  	for(let i = 1; i<=12; i++){
  		let st = (i<10?"0"+i.toString():i.toString());
  		this.monthArr.push(st);
  	}
  	for(let i = 2018; i<=parseInt(new Date().getFullYear().toString()); i++){
  		let st = (i<10?"0"+i.toString():i.toString());
  		this.yearArr.push(st);
  	}
  }

  close(){
  	this.view.dismiss();
  }

  soaSearch(){
  	let dt = this.year+"-"+this.month+"-"+this.paydate;
  	this.db.getSOAByDate(this.cid,dt,dt).then(res=>{
  		this.results = res.json() || [];
  		if(this.results.length > 0){
  			this.showSOA(this.results[0]);
  		}else{
            let tst = this.toast.create({
              message: 'No records found.',
              duration: 3000,
              position: 'top',
              cssClass:`fail`
            });
            tst.present();
  		}
  	}).catch(console.warn);
  }

  showSOA(i){
  	let mod = this.modal.create(StatementOfAccountPage,{data:i},{cssClass:`whitemodal xs  ${this.isMobile ? "mobile" : ""}`});
  	mod.present();
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

}
