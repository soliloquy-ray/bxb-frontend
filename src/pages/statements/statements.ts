import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, Modal, AlertController, ToastController } from 'ionic-angular';

import { LoansPage } from '../loans/loans';

import { DbProvider } from '../../providers/db/db';

import { StatementOfAccountPage } from '../statement-of-account/statement-of-account';

@IonicPage()
@Component({
  selector: 'page-statements',
  templateUrl: 'statements.html'
})
export class StatementsPage {

	soas = [
		/*{
			pdf:'PDF',
			company:'6805 Ayala Avenue Condominium Corporation',
			billPeriod:'07-30-2018',
			amt:14929.16,
			soaNo:'2018835',
			refNo:'240665CHQ',
			companyAct:'paid',
			mgtAct:'confirm'
		},
		{
			pdf:'PDF',
			company:'6805 Ayala Avenue Condominium Corporation',
			billPeriod:'07-15-2018',
			amt:16739.57,
			soaNo:'2018834',
			refNo:'240642CHQ',
			companyAct:'paid',
			mgtAct:'confirmed'
		},
		{
			pdf:'PDF',
			company:'BXB Employee Solutions Corp',
			billPeriod:'08-30-2018',
			amt:479.16,
			soaNo:'2018847',
			refNo:'',
			companyAct:'not paid',
			mgtAct:'confirm'
		}*/
	];

	hdrTitles = {
		'pdf':'',
		'company':'Name',
		'billPeriod':'Billing Period',
		'amt':'Amount Due',
		'soaNo':'SOA Ref #',
		'refNo':'Ref #',
		'companyAct':'Company',
		'mgtAct':'Management'
	};
	sampKeys = ["pdf","company","billPeriod","amt","soaNo","refNo","companyAct","mgtAct"];
	formats = {
		'pdf':'textEvent',
		'amt':'currency',
		'companyAct':'textDecorated',
		'mgtAct':'textEvent'
	};
	actions = [
		{
			"icon":"md-information-circle",
			"class":"display-disclosure"
		}
	];

	mod:Modal;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, private db: DbProvider, private loader: LoadingController, private modal: ModalController, private alert:AlertController, private toast:ToastController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'soa';

  	this.populateData();
  }

  async populateData(){
  	this.db.getSOAByDate().then(res=>{
  		this.soas = res.json();
  	}).catch(console.warn);
  }

  ionViewWillLeave(){
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

  toCreditSummary(){
  	this.navCtrl.setRoot(LoansPage,{},{animate:true, direction:"top"});
  }

  doAction(i:{index:number,val:any}){
  	if(i.index.toString().toLowerCase()=="confirm"){
  		let dt = JSON.parse(i.val);
  		if(dt['statusID'] === "2"){
  			this.showApproveAlert(dt['soaID']);
  		}else{
  			this.showSOA(dt);
  		}
  	}else
  	if(i.index.toString()=="PDF"){
  		let dt = JSON.parse(i.val);
  		let link = `${this.db.env}/templates/soa-template.php?cid=${dt.CompanyID}&d1=${dt.billPeriod}&d2=${dt.billPeriod}`;
  		window.open(link);
  	}else{
  		this.showSOA(JSON.parse(i.val));
  	}
  }


  showApproveAlert(id){
  	let self = this;
  	console.log(id);
  	let conf = this.alert.create({
      title: 'Reference No.',
      inputs: [
        {
          name: 'refno',
          placeholder: 'Reference Number'
        },
      ],
      buttons: [
        {
          text: 'Close',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Proceed',
          handler: data => {
          	let ref = data.refno;
          	let load = this.loader.create({
		      spinner: 'crescent',
		      showBackdrop: true,
		      content: `Processing...`,
		      dismissOnPageChange: true
          	})
          	this.db.soaStatusUpdate({id:id,status:3,data:ref})
          		.then(res=>{
          			load.dismiss();
          			if(res){
          				let tst = this.toast.create({message:"Payment processed", cssClass:"success", duration: 3000, position: 'top'})
          				tst.present();
          			}else{
          				let tst = this.toast.create({message:"Something went wrong. Please try again later", cssClass:"fail", duration: 3000, position: 'top'})
          				tst.present();
          			}
  					this.populateData();
          		})
          		.catch(err=>{
          			load.dismiss();
          			let tst = this.toast.create({message:"Something went wrong. Please try again later", cssClass:"fail", duration: 3000, position: 'top'})
          			tst.present();
          			console.warn(err);
          		})
          }
      }]
 	});

 	conf.present();
  }

  showSOA(i){
  	this.mod = this.modal.create(StatementOfAccountPage,{data:i},{cssClass:`whitemodal  ${this.isMobile ? "mobile" : ""}`});
  	this.mod.present();
  }

}
