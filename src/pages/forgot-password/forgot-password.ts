import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { Http, Headers, RequestOptions } from '@angular/http';

import { config } from '../../ext/config';
/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
	email: string;
	isMobile : boolean = mobilecheck();
  env = config[location.origin].backend;
  ls = localStorage.lastSent || 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private loader: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  forgotten(){
    let load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Processing...`,
      dismissOnPageChange: true
    });
    load.present();

    let hdr = new Headers;
    hdr.append('Content-Type','application/json');
    let rq = new RequestOptions;
    rq.headers = hdr;
    
    this.http.post(`${this.env}/api.php?q=forgotpassmail`,{email:this.email}, rq)
              .toPromise()
              .then(res=>{
                load.dismiss();
                if(res.status == 200){
                  this.ls = Date.now();
                  localStorage.lastSent = this.ls;
                }else{
                  console.warn(res.statusText);
                }
              })
              .catch(err=>{
                load.dismiss();
                console.warn(err);
              });
  }

  lastSent():boolean{
    return (Date.now() >= parseInt(this.ls)+60000);
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }


}
