import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, LoadingController, ToastController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';
import { EmployeesPage } from '../employees/employees';

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
  selector: 'page-add-employee',
  templateUrl: 'add-employee.html',
})
export class AddEmployeePage {
  jsdt = JSON.parse(localStorage.company);
	userData: any = {
  		firstName:"",
  		middleName:"",
  		lastName:"",
  		tin: "",
  		company: this.jsdt.companyName,
  		gender: "",
  		email: "",
  		hiredDate: "",
  		password: "",
  		mobile: "",
      birthday: "",
      position: "",
      entity: "",
      type: "",
      division: "",
      netSalary: 0,
      grossSalary: 0,
      bankName: "",
      vacationLeave: 0,
      sickLeave: 0,
      maternityLeave: 0,
      paternityLeave: 0,
      companyId: localStorage.companyId
  	};
	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
	dt;
	prefix:string = '63';
  submitFlag : boolean = false;
  @ViewChild('prev') prev: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private alert: AlertController, private menu: MenuController, private db: DbProvider, private loader: LoadingController, private toast: ToastController) {
  	
  }

  ionViewDidLoad() {
    this.menu.close();
    localStorage.page = 'employees';
  }

  ngAfterViewInit(){
    this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  submitReg(){
    this.userData.mobile = this.prefix + this.userData.mobile;
    let self = this;
    let uData = this.userData;
    this.submitFlag = true;
    let load = this.loader.create({
          spinner: 'crescent',
          dismissOnPageChange: true,
          showBackdrop: true,
          content: `Processing...`,
          enableBackdropDismiss:false
      });
    load.present();

    this.db.manAddEmp(uData).then(res=>{
      load.dismiss();
      if(res.text() === "true"){
        let toast = this.toast.create({
          message: 'Employee has been added',
          duration: 3000,
          position: 'top',
          cssClass:`success`
        });
        toast.onDidDismiss(d=>{
          self.navCtrl.setRoot(EmployeesPage,{},{animate:true, direction:"forward"});
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
    let u = this.userData;
    return ( u.firstName != "" && 
      u.middleName != "" && 
      u.lastName != "" &&
      u.tin.toString().length >= 9 &&
      u.company != "" &&
      u.gender != "" &&
      u.email != "" &&
      u.hiredDate != "" &&
      u.mobile.toString().length >= 10 &&
      u.birthday != "" &&
      u.position != "" &&
      u.entity != "" &&
      u.type != "" &&
      u.division != "" &&
      u.netSalary > 0 && 
      u.grossSalary > 0 &&
      u.bankName != "" );
  }

  goToTerms(){
  	window.open(window.location.origin+"/#/terms");
  	//this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
  }

  stat(event){
  	console.log(this);
  }

  takePic($event){
    let self = this;
    if($event.target.files && $event.target.files[0]){
      //self.uploadFile($event.target.files[0]);
      console.log($event.target.files[0]);
      let nurl = URL.createObjectURL($event.target.files[0]);
      self.prev.nativeElement.src = nurl;
    }

  }

  
}
