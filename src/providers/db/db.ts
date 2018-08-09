import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { config } from '../../ext/config';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  	env = config[location.origin].backend;
  constructor(public http: Http) {
    console.log('Hello DbProvider Provider');
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
				console.log(res.json());
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
				console.log(res.json());
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
				console.log(res.text());
				return res.text();
			})
			.catch(err=>{
				console.warn(err);
				return 0;
			})
	);
  }


}
