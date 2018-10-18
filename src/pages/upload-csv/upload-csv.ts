import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, Modal } from 'ionic-angular';

import { AppProvider } from '../../providers/app/app';
import { DbProvider } from '../../providers/db/db';
import { Http, Headers, RequestOptions } from '@angular/http';


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
  	fd;
  	file: File;
  	errors : Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private app: AppProvider, private loader: LoadingController, private modal: ModalController, private http:Http, private db:DbProvider) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'uploadcsv';
  }

  setupCSV($event){
    let self = this;
  	self.file = $event.target.files[0];
  	if(!self.file) return ;
    this.fd = new FormData();
    this.fd.append('file',self.file);
    let rdr : FileReader = new FileReader();
  	rdr.readAsText(self.file);
  	rdr.onload = (ef)=>{
  		let csv  = rdr.result.toString();
  		let acsv = csv.split("\n");
  		self.hdr = acsv[0].split(",");
  		self.headerRows = self.hdr.length;
  		acsv.splice(0,1);
  		self.bdy = acsv;  		  		

  		self.checkValidity(self.bdy)
  			.then(i=>{
  				self.uploadRdy = true;
  			})
  			.catch(console.warn);
  	}
  }

  see(e){
  	let file: File = e.target.files[0];
  	if(!file) return ;
  	let self = this;
  	

  }

  sendToBack(){
	/*this.app.uploadCSV(this.bdy)
			.then(res=>{
				console.log(res.json());
				//return res.json();
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})*/
	let self = this;
    let hdr = new Headers;
    //hdr.append('Content-Type','multipart/form-data');
    let rq = new RequestOptions;
    rq.headers = hdr;


    this.http.post('http://localhost/bxb-test-php/image_uploader.php',this.fd,rq)
              .toPromise()
              .then(res=>{
              	if(['200','201','202','204'].includes(res.text())){
              		self.db.uploadCsvFile(self.file.name).then(console.info).catch(console.warn)
              	}
              })
              .catch(console.info);
  }

  async checkValidity(d:Array<any>){
  	let self = this;
  	let res = d.every((v,ind)=>{
  		let dt = v.split(",");
  		//console.log(this.hdr[i],dt[i]);
  		self.errors = dt.map((a,i)=>{
  			return !self.checkFieldVal(a,i,ind)
  		})
  		return dt.length == this.headerRows;
  	});
  	return res;
  }

  checkFieldVal(v,i,line:number):boolean{
  	console.log(v,i,line);
  	if(v == "" || i == "") return false;
  	return true;
  }

  ionViewWillLeave(){
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }


} 
