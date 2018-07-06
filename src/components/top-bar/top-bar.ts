import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello TopBarComponent Component');
    this.text = 'Hello World';
  }

}
