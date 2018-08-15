import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Modal, ModalController, LoadingController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';
import { DetailVerificationPage } from '../detail-verification/detail-verification';
import { user } from '../../models/user';

import { intlPrefixes } from '../../ext/mob_prefixes';
import { config } from '../../ext/config';

import { Http, Headers, RequestOptions } from '@angular/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var mobilecheck; //fn to check for screen type

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
	userData: user = {
  		firstName:"",
  		middleName:"",
  		lastName:"",
		userName: "",
		email: "",
		companyCode: "",
		employeeId: "",
		payrollAccount: "",
		password: "",
		mobile: ""	
  	};
	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
	agreement:boolean = false;
	@ViewChild('prev') prev: ElementRef;
	dt;
	prefix:string = '63';
	ccode: string;
	mdl : Modal;
	env = config[location.origin].backend;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer,  private modal: ModalController, private loader: LoadingController, private http: Http) {
  	this.dt = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  ionViewWillLeave(){
  	if(this.mdl){
  		this.mdl.dismiss();
  	}
  }

  initData(data :any ){
  	this.userData = {
  		firstName:data.Name_First,
  		middleName:data.Name_Middle,
  		lastName:data.Name_Last,
		userName: "",
		email: "",
		companyCode: data.company_name,
		employeeId: data.master_id,
		payrollAccount: data.Payroll_Account,
		password: "",
		mobile: ""	
  	};

  	this.ccode = data.company_name;
  }

  ngAfterViewInit(){
  	let self = this;
  	this.prev.nativeElement.src = "../../assets/imgs/tmp-img.png";
  	this.mdl = this.modal.create(DetailVerificationPage,
  		{
  			data:{
  				firstName:this.dt.Name_First,
  				middleName:this.dt.Name_Middle,
  				lastName:this.dt.Name_Last,
  				companyCode: this.dt.company_name,
  				employeeId:this.dt.master_id,
  				payrollAccount:this.dt.Payroll_Account
  			}
  		},{cssClass:'whitemodal', enableBackdropDismiss:false});
  	this.mdl.present();
  	setTimeout(()=>{
  		if(self.dt) self.initData(this.dt);
  	},1000);	
  }

  toHome(){
  	this.navCtrl.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

  reorient($event){
  	this.isMobile = mobilecheck();
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

  submitReg(){
  	let load = this.loader.create({
	    spinner: 'crescent',
	    dismissOnPageChange: true,
	    showBackdrop: true,
	    content: `Please wait...`,
	    enableBackdropDismiss:false
  	});
  	load.present();

  	let hdr = new Headers;
  	hdr.append('Content-Type','application/json');
  	let rq = new RequestOptions;
  	rq.headers = hdr;
  	let uData = {
  		login:this.userData.userName,
  		password: this.userData.password,
  		mobile: this.prefix + this.userData.mobile,
  		email: this.userData.email,
  		id:this.userData.employeeId
  	};

  	this.http.post(`${this.env}/api.php?q=signup`,uData, rq).toPromise()
  			.then(res=>{
  				load.dismiss();
  				console.log(res.text());
  				this.toHome();
  			})
  			.catch(err=>{
  				load.dismiss();
  				console.warn(err);
  			});
  }

  goToTerms(){
  	window.open(window.location.origin+"/#/terms");
  	//this.navCtrl.setRoot(TermsPage,{},{animate:true, direction:"forward"});
  }

  stat(event){
  	console.log(this.userData);
  	if(this.userData.userName == '' || this.userData.email == '' || this.userData.mobile == '' || this.userData.password == '' || this.userData.password != this.confirmPass || !this.agreement){
  		return true;
  	}
  	else{
  		return false;
  	}
  }
/*
	uploadFile(file) {
	    let load = this.loader.create({
	      spinner: 'crescent',
	      dismissOnPageChange: true,
	      showBackdrop: true,
	      content: `Please wait...`,
	      enableBackdropDismiss:true});
	    load.present();
			let self = this;
	    var url = `https://api.cloudinary.com/v1_1/${self.cloudName}/image/upload`;
	    var xhr = new XMLHttpRequest();
	    var fd = new FormData();
	    xhr.open('POST', url, true);
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    
	    loadImage.parseMetaData(file, function(data){
	         let oren = 0;
	         if(data.exif){
	           oren = data.exif.get('Orientation');
	         }

	      loadImage(file,

	        function(img){
	          let base64data = img.toDataURL("image/jpeg");
	          //let img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
	          xhr.onreadystatechange = function(e) {
	            if (xhr.readyState == 4 && xhr.status == 200) {
	              // File uploaded successfully
	              var response = JSON.parse(xhr.responseText);
	              console.log(response);
		          self.prod = response;
		          let bgImg = response['secure_url'];
		          //self.tags = self.getTags(response);

	              textapi.imageTags({
	              	url:bgImg
	              },
	              function(error,resp) {
	              	if(error === null){
	              		console.log(resp);
			            self.fire.newImage(resp).then(console.log).catch(console.info);
				        self.dataLoaded = true;
				        self.bgImg = bgImg;
			            self.tags = self.getTags(resp);
			            load.dismiss();
	              	}
	              });
	              
	            }
	          }

	          let pid = file.name;
	          fd.append('file', base64data);
	          fd.append('public_id', pid);
	          fd.append('timestamp', self.tstamp.toString());
	          fd.append('upload_preset',self.uploadPreset);
	          //fd.append('categorization', self.tagging);
	          //fd.append('auto_tagging','0.25');
	          xhr.send(fd);
	        },

	        {
	          canvas:true,
	          orientation:oren,
	          maxWidth:800,
	          maxHeight:800
	        }
	       )
	    });

	} */
}
