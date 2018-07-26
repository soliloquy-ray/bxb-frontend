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
  text: string;
  accountType:string = localStorage.accountType;

  constructor() {
    console.log('Hello SideBarComponent Component');
    this.text = 'Hello World';
  }

  ngAfterViewInit(){
  }

  gethl():string{
    if(typeof localStorage.page == "string" && localStorage.page.length > 0){
    	this.hl = localStorage.page;
    }
    return this.hl;
  }

  goToLink(lnk:string){
      window.location.href = lnk;
  }

  logout(){
    localStorage.removeItem('accountType');
    localStorage.removeItem('userData');
    this.goToLink('/');
  }

}
