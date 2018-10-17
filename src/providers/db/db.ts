import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';

import { LoadingController } from 'ionic-angular';
/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  	env = config[location.origin].backend;
  	dtNow;
  constructor(public http: Http, private loader: LoadingController) {
  	let dt = new Date();
  	this.dtNow = dt.getUTCFullYear()+"-"+("0"+(dt.getUTCMonth().valueOf()+2)).slice(-2)+"-"+dt.getUTCDate();
  }

  async signUp(uData){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=signup`,uData, rq).toPromise();
  }

  async addCompanyHR(uData){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=add_hr`,uData, rq).toPromise();
  }

  async getPendingLoanCount(){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=get_pending_loan_count`,{cid:null}, rq).toPromise();
  }

  async manAddEmp(uData){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=manual_add_employee`,{emp:uData}, rq).toPromise();
  }

  async newCompany(uData){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=new_company`,uData, rq).toPromise();
  }

  async checkTin(uData){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=get_by_tin`,uData, rq).toPromise();
  }

  createNewLoan(uData):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return (
  		this.http.post(`${this.env}/api.php?q=applyloan`,{loan:uData}, rq).toPromise()
  	);
  }

  async addSchedofPayment(uData,loanID):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=add_payment_sched`,{paysched:uData,id:loanID}, rq).toPromise();
  }

  async getSchedofPayment(id):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;


  	let load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Loading Data...`,
      dismissOnPageChange: true
    });
    load.present();

  	return this.http.post(`${this.env}/api.php?q=get_payment_sched_by_id`,{loanID:id}, rq)
  					.toPromise()
  					.then(res=>{
  						let r = Array.from(res.json());
  						let x = r.map(a=>{
  							let b = {
  								paymentDate:a['payDate'].split(" ")[0],
  								paymentNum:a['payCount'],
  								amt:a['payAmount'],
  								bal:a['balance']
  							}
  							return b;
  						});
  						load.dismiss();
  						return x;
  					});
  }

  async getSOAByDate(cid = null, date2 = this.dtNow, date1 = '1971-01-01'):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;


  	let load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Loading Data...`,
      dismissOnPageChange: true
    });
    load.present();

    let params = {
    	date1:date1,
    	date2:date2,
    	cid:cid
    };

  	return this.http.post(`${this.env}/api.php?q=get_soa_by_date`,{soa:params}, rq)
  					.toPromise()
  					.then(res=>{
  						load.dismiss();
  						return Promise.resolve(res);
  					});
  }

	async getSOAPaySchedByDate(date, cid: number = 1):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;


  	let load = this.loader.create({
      spinner: 'crescent',
      showBackdrop: true,
      content: `Loading Data...`,
      dismissOnPageChange: true
    });
    load.present();

    let params = {
    	date:date,
    	cid:cid
    };

  	return this.http.post(`${this.env}/api.php?q=get_soa_details_by_date`,{soa:params}, rq)
  					.toPromise()
  					.then(res=>{
  						load.dismiss();
  						return Promise.resolve(res);
  					});
  }

  getLoansByStatus(stat, cid = 1):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=hr_get_loan_by_status`,{status:stat, cid:cid}, rq)
			.toPromise()
			.then(res=>{
				//console.log(res.json());
				return res.json();
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})
	);
  }


  getEmpLoansByStatus(stat):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;
	let masterId = JSON.parse(localStorage.userData).master_id;

	return (
		this.http.post(`${this.env}/api.php?q=get_loan_by_status`,{status:stat,id:masterId}, rq)
			.toPromise()
			.then(res=>{
				//console.log(res.json());
				return res.json();
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})
	);
  }

  updateLoanStatus(stat:number,id:number):Promise<any>{

	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=update_loan_status`,{status:stat,id:id}, rq)
			.toPromise()
			.then(res=>{
				//console.log(res.text());
				return res.text();
			})
			.catch(err=>{
				console.warn(err);
				return 0;
			})
	);
  }

  async getCompanyByID(id):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=get_company_by_id`,{cid:id}, rq)
			.toPromise()
			.then(res=>{
				//console.log(res.json());
				return res.json();
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})
	);
  }

  async checkUsernameIfExists(uname):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=check_user_exists`,{uname:uname}, rq)
			.toPromise()
			.then(res=>{
				console.log(res.text());
				if(res.text() == ""){
					return true;
				}
				else{
					return false;
				}
			})
			.catch(err=>{
				console.warn(err);
				return {};
			})
	);
  }

  async uploadCsvFile(fn:string = ''){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	let fname = fn.replace(/\s/g,'_');

	return (
		this.http.post(`${this.env}/api.php?q=uploadcsv`,{fname:fname}, rq)
			.toPromise()
		);
  }

  async addLineItem(lineItem){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=add_line_item`,{lineItem:lineItem}, rq)
			.toPromise()
		);
  }

  async loanPretermReq(loan){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=loan_preterm_request`,{loan:loan}, rq)
			.toPromise()
		);
  }

  async changeUserPassword(id: number = 0, pass: string = ''){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=changepass`,{id:id, pass:pass}, rq)
			.toPromise()
		);
  }

  async getActiveMembers(id: number = 0){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=get_active_members`,{cid:id}, rq)
			.toPromise()
		);
  }

  async getAllMembers(id: number = 0){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=get_all_members`,{cid:id}, rq)
			.toPromise()
		);
  }

  async getLineItems(id: number = 0, sched){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=get_line_items_by_id`,{cid:id, sched:sched}, rq)
			.toPromise()
		);
  }

  async finalizeSOA(id: number = 0, sched){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=finalize_soa`,{cid:id, sched:sched}, rq)
			.toPromise()
		);
  }

  async soaStatusUpdate(soa:{id:number,status:number,data:string}){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=soa_status_update`,{soa:soa}, rq)
			.toPromise()
		);
  }

  async userUpdate(user){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=user_update`,{user:user}, rq)
			.toPromise()
		);
  }

}
