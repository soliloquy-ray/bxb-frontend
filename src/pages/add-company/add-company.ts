import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';

import { intlPrefixes } from '../../ext/mob_prefixes';

declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-add-company',
  templateUrl: 'add-company.html',
})
export class AddCompanyPage {
	companyData: any = {
  		companyCode:"",
  		companyName:"",
  		tradeName:"",
  		address: "",
  		SECnum: "",
  		tin: "",
  		type: "",
  		industry: "",
  		minYear: "",
  		mobile: ""
  	};
  	companyRep: any = {
  		firstName:'',
  		lastName:'',
  		mobile:'',
  		landline:'',
  		email:''
  	};

  	bankDetails: any = {
  		bankName:'',
  		bankBranch:'',
  		bankAddress:'',
  		accountNumber:'',
  		swiftCode:''
  	};

  	controlPanel: any = {
  		salaryCutoff1:'',
  		salaryCutoff2:'',
  		soaDate1:'',
  		soaDate2:'',
  		username:'',
  		password:'',
  		status:'active',
  		netSalaryRule:0,
  	};

  	bxbForm: any = {
  		idNumber: '',
  		docSubmitted: false,
  		notes: ''
  	};

	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
	dt;
	prefix:string = '63';
  @ViewChild('prev') prev: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private alert: AlertController, private menu: MenuController) {
  	
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
  	let alert = this.alert.create({
  		enableBackdropDismiss: true,
  		title: "No backend",
  		message: "Coming soon",
  		buttons:[
  		{
  			text:"Ok",
  			role:'cancel'
  		}]
  	});

  	alert.present();
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
