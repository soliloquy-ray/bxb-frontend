import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { config } from '../../ext/config';

import { CookieService } from 'ngx-cookie-service';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  	env = config[location.origin].backend;
  constructor(private http: Http, private cookie: CookieService) {
  }

  generateOTP(max:number = 999999, min: number = 100000, age: number = 5):string{
  	let otp = (Math.random() * (max - min + 1) ) << 0;
  	let exp = new Date();
  	exp.setMinutes(exp.getMinutes() + age);
  	this.cookie.set('bxb-otp',otp.toString(),exp);

  	return otp.toString();
  }

  sendOTPmsg(otp:string, mobile:number){
  	if(this.cookie.get('bxb-otp')) otp = this.cookie.get('bxb-otp');
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;
	
	mobile = parseInt(mobile.toString().slice(-10));
  	return (
  		this.http.post(`${this.env}/api.php?q=gen_otp`,{mobile:mobile, otp:otp}, rq).toPromise()
  	);
  }

}
