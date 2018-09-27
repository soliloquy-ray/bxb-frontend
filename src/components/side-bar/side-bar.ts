import { Component, Input } from '@angular/core';

/**
 * Generated class for the SideBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-bar',
  templateUrl: 'side-bar.html'
})
export class SideBarComponent {
	@Input('highlights') hl : string = 'dashboard';
	@Input('mobile') mob: boolean = false;
  accountType:string = localStorage.accountType;

  constructor() {
  }

  ngAfterViewInit(){
  }

  gethl():string{
    if(typeof localStorage.page == "string" && localStorage.page.length > 0){
    	this.hl = localStorage.page;
    }
    return this.hl;
  }

  getAccountType():string{
    if(typeof localStorage.accountType == "string" && localStorage.accountType.length > 0){
      this.accountType = localStorage.accountType;
    }
    return this.accountType;
  }

  goToLink(lnk:string){
      window.location.href = lnk;
  }

  logout(){
    localStorage.removeItem('accountType');
    localStorage.removeItem('userData');
    localStorage.removeItem('roleId');
    localStorage.removeItem('companyId');
    localStorage.removeItem('company');
    this.goToLink('/');
  }

}
