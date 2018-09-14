import { Component, Input } from '@angular/core';

@Component({
  selector: 'preterm',
  templateUrl: 'preterm.html'
})
export class PretermComponent {
	@Input('principal') p: number = 1000;
	@Input('paydays') t: number = 1; //term 
	@Input('rate') r: number = 0.025;
	@Input('type') type: any = '';

	now :Date = new Date();

	deductionPerPayDay:number = ((this.t * this.r * this.p) + this.p)/this.t;
	loan;
  constructor() {
  	console.log(this);
  }

  


}
