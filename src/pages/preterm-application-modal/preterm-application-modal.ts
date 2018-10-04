import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

declare var mobilecheck;

@IonicPage()
@Component({
  selector: 'page-preterm-application-modal',
  templateUrl: 'preterm-application-modal.html',
})
export class PretermApplicationModalPage {

	isMobile : boolean = mobilecheck();
	user: any = {name:'Ray Santos',empID:'123'};
	loan: {principal:number,id:number} = {principal: 25000, id: 1};
	loanFee: number = this.loan.principal * 0.03;
	due: number = 26062.46;
	paySched : Array<any> = [];
  reason: string = "";
  loanInterest : number = this.loan.principal * 0.0125;
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController, private db: DbProvider) {
  	if(this.navParams.get('user')){
  		this.user = this.navParams.get('user');
  	}
  	if(this.navParams.get('loan')){
  		this.loan = this.navParams.get('loan');
  	}
  }

  ionViewDidLoad() {
  }

  ngAfterViewInit(){
  	this.db.getSchedofPayment(this.loan.id).then(res=>{
  		this.paySched = res;
      this.loanFee = this.loan.principal * 0.03;
      this.loanInterest = this.loan.principal * 0.0125;
    	console.log(this);
  	}).catch(console.warn);
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  print(){
  	window.print();
  }

  close(){
  	this.view.dismiss();
  }

  submit(){
    this.db.loanPretermReq({loanId:this.loan.id,amt:this.getAmtDue(),note:this.reason})
        .then(rs=>{
          this.db.updateLoanStatus(4,this.loan.id)
             .then(res=>{
               console.info(res);
               this.view.dismiss();
             })
             .catch(console.warn);
    }).catch(err=>{
      console.warn(err);
    })
  }

  getAmtDue():number{
    return parseFloat((this.loan.principal*1 + this.loanInterest*1 + this.loanFee*1).toString());
  }
}
