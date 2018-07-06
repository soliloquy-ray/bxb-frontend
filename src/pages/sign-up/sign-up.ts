import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

import { LoginPage } from '../login/login';
import { user } from '../../models/user';

import { intlPrefixes } from '../../ext/mob_prefixes';

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
	userData: user;
	confirmPass: string = '';
	prefixes = this.sanitizer.bypassSecurityTrustHtml(intlPrefixes);
	isMobile : boolean = mobilecheck();
	@ViewChild('prev') prev: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private alert: AlertController) {
  	this.initData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  initData(){
  	this.userData = {
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
