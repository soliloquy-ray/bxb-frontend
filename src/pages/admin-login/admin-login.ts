import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, Toast, LoadingController } from 'ionic-angular';

//import { SignUpPage } from '../sign-up/sign-up';
import { SignupTinPage } from '../signup-tin/signup-tin';
import { HrDashboardPage } from '../hr-dashboard/hr-dashboard';
import { SuperDashboardPage } from '../super-dashboard/super-dashboard';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';

import { AppProvider } from '../../providers/app/app';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

export interface login {
	username: string,
	pass: string
};

@IonicPage()
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {

	userData:login = {username:"", pass:""};
	isMobile: boolean = mobilecheck();
  env = config[location.origin].backend;
  cp: string = "";
  
  bgImg: string = "url('../../assets/imgs/login-bg.png')";
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private http: Http, private toast: ToastController, private loader: LoadingController, private app: AppProvider) {
  	console.log(this.env);
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'admin-login';
    if(typeof localStorage.accountType == "string" && typeof localStorage.userData == "string"){
      switch (localStorage.accountType) {
        case "hr":
          this.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
          // code...
          break;
        
        default:
          this.navCtrl.setRoot(SuperDashboardPage,{},{animate:true, direction:"forward"});
          // code...
          break;
      }
    }
  }


  toReg(){
  	this.navCtrl.setRoot(SignupTinPage,{},{animate:true, direction:"forward"});
  }

  login(){

    /* backdoor */
    if(this.userData.username == "super" && this.userData.pass == "pass"){
          localStorage.userData = [];
          localStorage.accountType = 'super';
          this.navCtrl.setRoot(SuperDashboardPage,{},{animate:true, direction:"forward"});
          return ;
    }
    /*else if(this.userData.username == "hr" && this.userData.pass == "pass"){
          localStorage.userData = [];
          localStorage.accountType = 'hr';
          this.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
          return ;
    }*/

  	let self = this;
  	let uData = this.userData;
  	let hdr = new Headers;
  	hdr.append('Content-Type','application/json');
  	let rq = new RequestOptions;
  	rq.headers = hdr;
  	
  	let load = this.loader.create({
	      spinner: 'crescent',
	      dismissOnPageChange: true,
	      showBackdrop: true,
	      content: `Please wait...`,
	      enableBackdropDismiss:false});
	load.present();

  	this.http.post(`${this.env}/api.php?q=admin-login`,uData, rq)
  			.toPromise()
  			.then(res=>{
  				/*load.dismiss();
  				let txt = res.text().toLowerCase().replace(/[^A-Za-z]/g,'');
  				let stat = (txt == "usersuccessfullyloggedin" ? "success" : "fail");
  				if(stat == "success"){
  					self.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
  				}else{
  					this.launchToast(res.text(),stat);
  				}  				*/
          load.dismiss();
          let uDt = res.json();
          if(!uDt.hasOwnProperty('companyid')){
            this.launchToast('Invalid login','fail');
          }else{
            localStorage.accountType = 'hr';
            localStorage.companyId = uDt.companyid;
            localStorage.roleId = uDt.roleid;
            self.app.setCompanyDetails(uDt.companyid);
            self.navCtrl.setRoot(HrDashboardPage,{},{animate:true, direction:"forward"});
          }
          //id = id[0].master_id;
          //this.http.post()
  			})
        .catch(err=>{
          load.dismiss();
          this.launchToast('Invalid login','fail');
          console.warn(err);
        })
  }

  launchToast(msg:string, status: any = 1) : Toast{
	  let toast = this.toast.create({
	    message: msg,
	    duration: 3000,
	    position: 'top',
	    cssClass:`${status}`
	  });
	  toast.present();
	  return toast;
  }

  toForget(){
  	this.navCtrl.setRoot(ForgotPasswordPage,{},{animate:true, direction:"forward"});
  }

  reorient(){
  	this.isMobile = mobilecheck();
  }

  async testApi(){
    let hdr = new Headers;
    hdr.append('Content-Type','application/json');
    let rq = new RequestOptions;
    rq.headers = hdr;

    this.http.post(`https://bxb-backend-php.azurewebsites.net/api.php?q=test`,{},rq).toPromise()
        .then(console.log)
        .catch(console.info)
  }
}
