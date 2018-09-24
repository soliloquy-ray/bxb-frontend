import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, LoadingController, ToastController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';
import { CompaniesPage } from '../companies/companies';

import { intlPrefixes } from '../../ext/mob_prefixes';
import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-add-hr',
  templateUrl: 'add-hr.html',
})
export class AddHrPage {
	hrData: any = {
  		login:'',
  		password:'',
  		mobile:'',
  		email:'',
      companyId: 0
  	};
	confirmPass: string = '';
	isMobile : boolean = mobilecheck();
	dt;
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	prefix:string = '63';
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private alert: AlertController, private menu: MenuController, private db: DbProvider, private loader: LoadingController, private toast: ToastController) {
  	this.hrData.companyId = this.navParams.get('cid') || 1;
  }

  ionViewDidLoad() {
    this.menu.close();
    localStorage.page = 'companies';
  }

  ngAfterViewInit(){
  	console.log(this.hrData);
  }

  toHome(){
  	//this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  submitReg(){
    this.hrData.mobile = this.prefix + this.hrData.mobile;
    let self = this;
    let uData = this.hrData;
    console.log(this.hrData);
    let load = this.loader.create({
          spinner: 'crescent',
          dismissOnPageChange: true,
          showBackdrop: true,
          content: `Processing...`,
          enableBackdropDismiss:false
      });
    load.present();

    this.db.addCompanyHR(uData).then(res=>{
      load.dismiss();
      if(res.text() === '1'){
        let toast = this.toast.create({
          message: 'HR Account has been added',
          duration: 3000,
          position: 'top',
          cssClass:`success`
        });
        toast.onDidDismiss(d=>{
          self.navCtrl.setRoot(CompaniesPage,{},{animate:true, direction:"forward"});
        });
        toast.present();
      }else{
        let toast = this.toast.create({
          message: 'An error occurred. Please try again later.',
          duration: 3000,
          position: 'top',
          cssClass:`fail`
        });
        toast.present();
      }
    }).catch(err=>{
      load.dismiss();
      let toast = this.toast.create({
        message: 'An error occurred. Please try again later.',
        duration: 3000,
        position: 'top',
        cssClass:`fail`
      });
      toast.present();
      console.warn(err);
    });
  }

  readyForSubmit() : boolean{
    let u = this.hrData;
    return ( u.login != "" && 
      u.password != "" && 
      u.email != "" &&
      u.mobile.toString().length == 10 &&
      u.password == this.confirmPass &&
      u.companyId > 0);
  }

  goToTerms(){
  	window.open(window.location.origin+"/#/terms");
  	//this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
  }

  stat(event){
  	console.log(this);
  }
  
}
