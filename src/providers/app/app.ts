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
  	this.genKeyHash();
  	let exp = new Date();
  	exp.setMinutes(exp.getMinutes() + age);
  	this.cookie.set('bxo',this.encrypter(otp),exp);

  	return this.encrypter(otp);
  }

  sendOTPmsg(otp:string, mobile:number){
  	if(this.cookie.get('bxo')) otp = this.cookie.get('bxo');
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;
	
	mobile = parseInt(mobile.toString().slice(-10));
  	return (
  		this.http.post(`${this.env}/api.php?q=gen_otp`,{mobile:mobile, otp:otp, h: this.cookie.get('bkhsh')}, rq).toPromise()
  	);
  }

  genKeyHash(){
  	let alph = "qwertyuiopasdfghjklzxcvbnm";
  	let ln = alph.length-1;
  	let kh = "";
  	for(let i=0;i<=9;i++){
  		let ind = Math.floor(Math.random()*ln);
  		kh += alph[ ind <= 0 ? 0 : ind ];
  		alph = alph.replace(alph[ ind <= 0 ? 0 : ind ],'');
  		--ln;
  	}
  	this.cookie.set('bkhsh',this.garbager(kh));
  }

  garbager(v:string):string{
  	let val = Array.from(v);
  	let inder = Math.ceil(Math.random()*5);
  	for(let i = 0; i<v.length;i++){
  		if(i%inder == 0){
  			for(let j=0;j<i;j++){
  				let ins = Math.ceil(Math.random()*9).toString();
  				val.splice(i*j,0,ins);
  			}
  		}
  	}
  	return val.join("");
  }

  encrypter(v:number):string{
  	let b = this.cookie.get('bkhsh').replace(/[0-9]/g,'');
  	let val = v.toString();
  	let str = "";
  	for(let i = 0; i<val.length;i++){
  		str += b[val[i]];
  	}
  	return this.garbager(str);
  }

  decrypter(v:string):string{
  	let b = this.cookie.get('bkhsh').replace(/[0-9]/g,'');
  	let val = v.replace(/[0-9]/g,'');
  	let str = "";
  	for(let i = 0; i<val.length;i++){
  		str += b.indexOf(val[i]);
  	}
  	return str;
  }

  checkOtp(otp:string):boolean{
    return otp == this.decrypter(this.cookie.get('bxo'));
  }


  async uploadCSV(fl){
	let hdr = new Headers;
	hdr.append('Content-Type','application/json');
	let rq = new RequestOptions;
	rq.headers = hdr;

	let json = JSON.stringify(fl);

	return this.http.post(`${this.env}/api.php?q=uploadcsv`,{data:fl}, rq)
			.toPromise();
  }

}
