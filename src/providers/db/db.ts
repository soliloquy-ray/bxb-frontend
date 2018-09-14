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
  constructor(public http: Http, private loader: LoadingController) {
  }

  async signUp(uData){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

  	return this.http.post(`${this.env}/api.php?q=signup`,uData, rq).toPromise();
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

  getLoansByStatus(stat):Promise<any>{
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	return (
		this.http.post(`${this.env}/api.php?q=hr_get_loan_by_status`,{status:stat}, rq)
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


}
