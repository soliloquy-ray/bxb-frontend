import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentsModule } from '../components/components.module';

import { AccountLinkComponent } from '../components/account-link/account-link';

/* shared pages */
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignupTinPage } from '../pages/signup-tin/signup-tin';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TermsPage } from '../pages/terms/terms';
import { LoansPage } from '../pages/loans/loans';
import { AddEmployeePage } from '../pages/add-employee/add-employee';

/* admin pages */
import { EmployeesPage } from '../pages/employees/employees';
import { HrDashboardPage } from '../pages/hr-dashboard/hr-dashboard';

/* modals */
import { DisclosureStatementPage } from '../pages/disclosure-statement/disclosure-statement';
import { EmployeeInfoModalPage } from '../pages/employee-info-modal/employee-info-modal';

import { HttpModule } from '@angular/http';


var pages = [
  MyApp,
  HomePage,
  LoginPage,
  SignUpPage,
  ForgotPasswordPage,
  HrDashboardPage,
  TermsPage,
  AccountLinkComponent,
  LoansPage,
  SignupTinPage,
  DisclosureStatementPage,
  EmployeesPage,
  AddEmployeePage,
  EmployeeInfoModalPage
];

@NgModule({
  declarations:pages,
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignUpPage, name: 'SignUpPage', segment: 'sign-up' },
        { component: ForgotPasswordPage, name: 'ForgotPasswordPage', segment: 'forgot' },
        { component: HrDashboardPage, name: 'HrDashboardPage', segment: 'hr-dashboard' },
        { component: TermsPage, name: 'TermsPage', segment: 'terms' },
        { component: LoansPage, name: 'LoansPage', segment: 'loans' },
        { component: SignupTinPage, name: 'SignupTinPage', segment: 'tin' },
        { component: DisclosureStatementPage, name: 'DisclosureStatementPage', segment: 'ds' },
        { component: EmployeesPage, name: 'EmployeesPage', segment: 'employees' },
        { component: AddEmployeePage, name: 'AddEmployeePage', segment: 'add-employee' },
        { component: EmployeeInfoModalPage, name: 'EmployeeInfoModalPage', segment: 'modal-employee-info' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents:pages,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
