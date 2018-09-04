import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, Modal } from 'ionic-angular';

import { AppProvider } from '../../providers/app/app';

@IonicPage()
@Component({
  selector: 'page-upload-csv',
  templateUrl: 'upload-csv.html'
})
export class UploadCsvPage {
	mod:Modal;
	hdr:string[] = [];
	bdy:string[] = [];
	headerRows:number = 0;
  	uploadRdy: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private app: AppProvider, private loader: LoadingController, private modal: ModalController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'uploadcsv';
  }

  see(e){
  	let file: File = e.target.files[0];
  	if(!file) return ;
  	let self = this;
  	let rdr : FileReader = new FileReader();
  	rdr.readAsText(file);
  	rdr.onload = (ef)=>{
  		let csv  = rdr.result.toString();
  		let acsv = csv.split("\n");
  		self.hdr = acsv[0].split(",");
  		self.headerRows = self.hdr.length;
  		acsv.splice(0,1);
  		self.bdy = acsv;  		  		

  		self.checkValidity(self.bdy)
  			.then(i=>{
  				self.uploadRdy = i;
  			})
  			.catch(console.warn);
  	}

  }

  sendToBack(){
	this.app.uploadCSV(this.bdy)
			.then(res=>{
				console.log(res.json());
				//return res.json();
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})
  }

  async checkValidity(d:Array<any>){
  	let i = d.every((v,i)=>{
  		let dt = v.split(",");
  		console.log(this.hdr[i],dt[i]);
  		return dt.length == this.headerRows;
  	});
  	return i;
  }

  ionViewWillLeave(){
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }


} 
