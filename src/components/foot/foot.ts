import { Component, Input } from '@angular/core';

/**
 * Generated class for the FootComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'foot',
  templateUrl: 'foot.html'
})
export class FootComponent {

	@Input('compact') compact : boolean = true;
  constructor() {
  }

  ngAfterViewInit(){
  	//console.info(this.compact);
  }

  toHome(){
  	window.location.href = "/";
  }

}
