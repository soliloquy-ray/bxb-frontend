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
	code: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loader: LoadingController, private db: DbProvider, private toast: ToastController) {
  	this.code = this.navParams.get('c') || '';
  }

  ionViewDidLoad() {
  	console.log(this.code);
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  submit(){
  	if(this.id == 0 || this.pw == "") return ;
  	this.db.changeUserPassword(this.id,this.pw).then(res=>{
  		console.info(res);
  	}).catch(console.warn)
  }

  isValid():boolean{
  	return (
  		this.pw != "" &&
  		this.con != "" &&
  		this.pw == this.con &&
  		this.id != 0
  		);
  }

}
