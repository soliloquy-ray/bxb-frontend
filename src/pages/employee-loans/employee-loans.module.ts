import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeLoansPage } from './employee-loans';

@NgModule({
  declarations: [
    EmployeeLoansPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeLoansPage),
  ],
})
export class EmployeeLoansPageModule {}
