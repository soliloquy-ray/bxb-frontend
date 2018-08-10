import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, MenuController } from 'ionic-angular';

import { AccountLinkComponent } from '../account-link/account-link';

/**
 * Generated class for the TopBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.html'
})
export class TopBarComponent {
  @ViewChild('pic') pic: ElementRef;
  text: string;

  constructor(private pop:PopoverController, private menu: MenuController) {
    console.log('Hello TopBarComponent Component');
    this.text = 'Hello World';
  }

  isMobile(){
    return localStorage.view == "mobile";
  }

  ngAfterViewInit(){
  	this.pic.nativeElement.src = "../../assets/imgs/tmp-img.png";
  }

  presentMyAcc(event){

  	if(this.isMobile()){

	  	this.menu.open(); 	
  	}else{
	  	let popover = this.pop.create(AccountLinkComponent,{},{cssClass:'top-45'});
	  	popover.present({
	  		ev:event
	  	});  		
  	}

  }

  presentNotifs(event){

  	let popover = this.pop.create(AccountLinkComponent,{},{cssClass:(this.isMobile() ? 'mobile':'top-45')});
  	popover.present({
  		ev:event
  	});

  }

}
