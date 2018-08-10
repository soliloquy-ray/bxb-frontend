import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the LoanComponent component.
 *
 * This should perform all computations based on 
 * loan amount, paydays, and interest
 */
@Component({
  selector: 'loan',
  templateUrl: 'loan.html'
})
export class LoanComponent {
	@Input('principal') p: number = 1000;
	@Input('paydays') t: number = 1; //term 
	@Input('rate') r: number = 0.025;
  text: string;

  constructor() {
    console.log('Hello LoanComponent Component');
    this.text = 'Hello World';
  }

}
