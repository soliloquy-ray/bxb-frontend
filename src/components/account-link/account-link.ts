import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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


  constructor(private viewCtrl : ViewController) {
  }

  close(){
  	this.viewCtrl.dismiss();
  }

  goToProfile(){
    window.location.href = location.origin + "/#/edit-profile";
  }

  logout(){
    let path = '';
     if(localStorage.accountType != 'employee') path = '#/admin-login';
    localStorage.removeItem('accountType');
    localStorage.removeItem('userData');
    localStorage.removeItem('roleId');
    localStorage.removeItem('companyId');
  	this.viewCtrl.dismiss();
  	//this.nav.setRoot(LoginPage,{},{animate:true, direction:"forward"});
  	window.location.href = location.origin+"/"+path;
  }

}
