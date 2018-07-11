import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';

import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the AccountLinkComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'account-link',
  templateUrl: 'account-link.html'
})
export class AccountLinkComponent {

  text: string;

  constructor(private viewCtrl : ViewController, private nav: NavController) {
    console.log('Hello AccountLinkComponent Component');
    this.text = 'Hello World';
  }

  close(){
  	this.viewCtrl.dismiss();
  }

  goToProfile(){

  }

  logout(){
  	//let nav = this.content.na
  	this.viewCtrl.dismiss();
  	this.nav.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  }

}
