import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello FootComponent Component');
    this.text = 'Hello World';
  }

}
