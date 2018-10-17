import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

//import { Http, Headers, RequestOptions } from '@angular/http';
import { DbProvider } from '../../providers/db/db';
import { LoginPage } from '../login/login';

declare var mobilecheck; //fn to check for screen type

/**
 * Generated class for the PwResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pw-reset',
  templateUrl: 'pw-reset.html',
})
export class PwResetPage {

	pw:string = '';
	con:string = '';
	id: number = 0;
	code: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loader: LoadingController, private db: DbProvider, private toast: ToastController) {
  	this.code = JSON.parse(atob(this.navParams.get('c'))) || '';
  	this.id = this.code.master_id;
  }

  ionViewDidLoad() {

  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  submit(){
  	//if(this.id == 0 || this.pw == "") return ;
  	let self = this;
  	let load = this.loader.create({
        spinner: 'crescent',
        dismissOnPageChange: true,
        showBackdrop: true,
        content: `Processing...`,
  	});
  	load.present();
  	this.db.changeUserPassword(this.id,this.pw).then(res=>{
  		load.dismiss();
  		let tst = this.toast.create({message:"Password has been changed.", position:"top", cssClass:"success", duration:3000});
  		tst.onDidDismiss(()=>{
  			self.navCtrl.setRoot(LoginPage,{}, {animate:true,direction:"forward"});
  		});
  		tst.present();
  		console.info(res);
  	}).catch(err=>{
  		load.dismiss();
  		let tst = this.toast.create({message:"Password change failed.", position:"top", cssClass:"fail", duration:3000});
  		tst.present();
  		console.warn(err);
  	})
  }

  isValid():boolean{
  	return (
  		this.pw != "" &&
  		this.con != "" &&
  		this.pw == this.con
  		);
  }

}
