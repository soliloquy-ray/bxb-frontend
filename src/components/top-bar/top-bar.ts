import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { AccountLinkComponent } from '../account-link/account-link';

/**
 * Generated class for the TopBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
 declare var mobilecheck;

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.html'
})
export class TopBarComponent {
  @ViewChild('pic') pic: ElementRef;
  text: string;
  isMobile: boolean = mobilecheck();

  constructor(private pop:PopoverController) {
    console.log('Hello TopBarComponent Component');
    this.text = 'Hello World';
  }

  reorient($event){
  	this.isMobile = mobilecheck();
  }

  ngAfterViewInit(){
  	this.pic.nativeElement.src = "../../assets/imgs/tmp-img.png";
  }

  presentMyAcc(event){

  	let popover = this.pop.create(AccountLinkComponent,{},{cssClass:'top-45 width-less'});
  	popover.present({
  		ev:event
  	});

  }

  presentNotifs(event){

  	let popover = this.pop.create(AccountLinkComponent,{},{cssClass:'top-45'});
  	popover.present({
  		ev:event
  	});

  }

}
