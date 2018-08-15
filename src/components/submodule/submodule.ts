import { Component, Input } from '@angular/core';

/**
 * Generated class for the SubmoduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submodule',
  templateUrl: 'submodule.html'
})
export class SubmoduleComponent {

	@Input('title') title: string;
	@Input('footerD') footerDetails : any = false;
	@Input('searchbar') searchbar: boolean = false;
  text: string;

  constructor() {
  }

  ngAfterViewInit(){

  }

}
