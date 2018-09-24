import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, LoadingController, ToastController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';
import { CompaniesPage } from '../companies/companies';

import { intlPrefixes } from '../../ext/mob_prefixes';
import { DbProvider } from '../../providers/db/db';

declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-add-company',
  templateUrl: 'add-company.html',
})
export class AddCompanyPage {
	companyData: any = {
  		//companyCode:"",
  		companyName:"",
  		//tradeName:"",
  		country:"",
  		address: "",
  		city: "",
  		zip: ""
  		//SECnum: "",
  		//tin: "",
  		//type: "",
  		//industry: "",
  		//minYear: "",
  		//mobile: ""
  	};
  	companyRep: any = {
  		//firstName:'',
  		//lastName:'',
  		mobile:'',
  		phone:'',
  		//email:''
  	};

  	bankDetails: any = {
  		bankName:'',
  		bankBranch:'',
  		bankAddress:'',
  		accountNumber:'',
  		swiftCode:''
  	};

  	controlPanel: any = {
  		/*salaryCutoff1:'',
  		salaryCutoff2:'',
  		soaDate1:'',
  		soaDate2:'',
  		username:'',
  		password:'',
  		status:'active',
  		netSalaryRule:0,*/
  		minRate: 0,
  		maxRate: 0,
  		minLoan: 0,
  		maxLoan: 0
  	};

  	bxbForm: any = {
  		//idNumber: '',
  		docSubmitted: false,
  		//notes: '',
  		docs:{
  			secRegist:false,
  			bir2307:false,
  			finStat:false,
  			gis:false
  		}
  	};

	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
	dt;
	prefix:string = '63';
  submitFlag : boolean = false;
  @ViewChild('prev') prev: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private alert: AlertController, private menu: MenuController, private db: DbProvider, private toast: ToastController, private loader : LoadingController) {
  	
  }

  ionViewDidLoad() {
  	this.menu.close();
  	localStorage.page = 'companies';
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
  	let self = this;
    let load = this.loader.create({
          spinner: 'crescent',
          dismissOnPageChange: true,
          showBackdrop: true,
          content: `Processing...`,
          enableBackdropDismiss:false
      });
    load.present();
    this.submitFlag = true;
  	let dt = {...this.companyData,...this.companyRep,...this.bankDetails,...this.controlPanel,...this.bxbForm};
  	
  	this.db.newCompany(dt).then(res=>{
  		load.dismiss();
    	if(res.text() === "true"){
	        let toast = this.toast.create({
	          message: 'Company has been created',
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

  readyForSubmit(){
    let cd = this.companyData;
    let cr = this.companyRep;
    let bd = this.bankDetails;
    return ( cd.companyName != "" && 
      cd.country != "" && 
      cd.address != "" &&
      cd.city != "" &&
      cd.zip != "" &&
      cr.mobile.toString().length >= 9 &&
      bd.bankName != "" &&
      bd.bankAddress != "" &&
      bd.bankBranch != "" &&
      bd.accountNumber != "" &&
      bd.swiftCode != "");
  }

  
}
