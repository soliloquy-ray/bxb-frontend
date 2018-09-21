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
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { LoansPage } from '../pages/loans/loans';
import { ActivityLogPage } from '../pages/activity-log/activity-log';
import { AdminLoginPage } from '../pages/admin-login/admin-login';

/* employee pages */
import { EmployeeDashboardPage } from '../pages/employee-dashboard/employee-dashboard';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { EmployeeLoansPage } from '../pages/employee-loans/employee-loans';
//import { CDashboardPage } from '../pages/c-dashboard/c-dashboard';

/* hr pages */
import { EmployeesPage } from '../pages/employees/employees';
import { HrDashboardPage } from '../pages/hr-dashboard/hr-dashboard';
import { AddEmployeePage } from '../pages/add-employee/add-employee';
import { EditEmployeePage } from '../pages/edit-employee/edit-employee';
import { SoaPage } from '../pages/soa/soa';
import { UploadCsvPage } from '../pages/upload-csv/upload-csv';

/* superuser pages */
import { SuperDashboardPage } from '../pages/super-dashboard/super-dashboard';
import { AdminCreditPage } from '../pages/admin-credit/admin-credit';
import { CompaniesPage } from '../pages/companies/companies';
import { StatementOfAccountPage } from '../pages/statement-of-account/statement-of-account';
import { FlaggingPage } from '../pages/flagging/flagging';
import { PretermPage } from '../pages/preterm/preterm';
import { AddCompanyPage } from '../pages/add-company/add-company';
import { StatementsPage } from '../pages/statements/statements';
import { AddHrPage } from '../pages/add-hr/add-hr';

/* modals */
import { DisclosureStatementPage } from '../pages/disclosure-statement/disclosure-statement';
import { EmpDisclosureStatementModalPage } from '../pages/emp-disclosure-statement-modal/emp-disclosure-statement-modal';
import { EmployeeInfoModalPage } from '../pages/employee-info-modal/employee-info-modal';
import { TermsModalPage } from '../pages/terms-modal/terms-modal';
import { DetailVerificationPage } from '../pages/detail-verification/detail-verification';
import { PretermApplicationModalPage } from '../pages/preterm-application-modal/preterm-application-modal';

import { HttpModule } from '@angular/http';
import { DragScrollModule } from 'ngx-drag-scroll';
import { NgxPaginationModule } from 'ngx-pagination';
import { DbProvider } from '../providers/db/db';
import { AppProvider } from '../providers/app/app';
import { CookieService } from 'ngx-cookie-service';
import { MediaProvider } from '../providers/media/media';

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
  EmployeeInfoModalPage,
  TermsModalPage,
  DetailVerificationPage,
  PrivacyPolicyPage,
  EditEmployeePage,
  SuperDashboardPage,
  EmployeeDashboardPage,
  EmpDisclosureStatementModalPage,
  EditProfilePage,
  EmployeeLoansPage,
  AdminCreditPage,
  CompaniesPage,
  StatementOfAccountPage,
  FlaggingPage,
  PretermPage,
  AddCompanyPage,
  StatementsPage,
  SoaPage,
  ActivityLogPage,
  UploadCsvPage,
  PretermApplicationModalPage,
  AddHrPage,
  AdminLoginPage
];

@NgModule({
  declarations:pages,
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpModule,
    DragScrollModule,
    NgxPaginationModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: LoginPage, name: 'LoginPage', segment: 'login/:company/portal' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignUpPage, name: 'SignUpPage', segment: 'sign-up' },
        { component: ForgotPasswordPage, name: 'ForgotPasswordPage', segment: 'forgot' },
        { component: HrDashboardPage, name: 'HrDashboardPage', segment: 'hr-dashboard' },
        { component: TermsPage, name: 'TermsPage', segment: 'terms' },
        { component: LoansPage, name: 'LoansPage', segment: 'hr/loans' },
        { component: SignupTinPage, name: 'SignupTinPage', segment: 'tin' },
        { component: DisclosureStatementPage, name: 'DisclosureStatementPage', segment: 'ds' },
        { component: EmployeesPage, name: 'EmployeesPage', segment: 'employees' },
        { component: AddEmployeePage, name: 'AddEmployeePage', segment: 'add-employee' },
        { component: EmployeeInfoModalPage, name: 'EmployeeInfoModalPage', segment: 'modal-employee-info' },
        { component: TermsModalPage, name: 'TermsModalPage', segment: 'modal-terms' },
        { component: DetailVerificationPage, name: 'DetailVerificationPage', segment: 'verify-info' },
        { component: PrivacyPolicyPage, name: 'PrivacyPolicyPage', segment: 'privacy-policy' },
        { component: EditEmployeePage, name: 'EditEmployeePage', segment: 'edit-employee' },
        { component: SuperDashboardPage, name: 'SuperDashboardPage', segment: 'management/dashboard' },
        { component: EmployeeDashboardPage, name: 'EmployeeDashboardPage', segment: 'employee-dashboard' },
        { component: EmpDisclosureStatementModalPage, name: 'EmpDisclosureStatementModalPage', segment: 'eds' },
        { component: EditProfilePage, name: 'EditProfilePage', segment: 'edit-profile' },
        { component: EmployeeLoansPage, name: 'EmployeeLoansPage', segment: 'loanstatus' },
        { component: AdminCreditPage, name: 'AdminCreditPage', segment: 'management/loans' },
        { component: CompaniesPage, name: 'CompaniesPage', segment: 'management/companies' },
        { component: StatementOfAccountPage, name: 'StatementOfAccountPage', segment: 'modal-soa' },
        { component: FlaggingPage, name: 'FlaggingPage', segment: 'management/flagging' },
        { component: PretermPage, name: 'PretermPage', segment: 'management/preterm' },
        { component: AddCompanyPage, name: 'AddCompanyPage', segment: 'add-company' },
        { component: StatementsPage, name: 'StatementsPage', segment: 'management/soa' },
        { component: SoaPage, name: 'SoaPage', segment: 'statement-of-account' },
        { component: ActivityLogPage, name: 'ActivityLogPage', segment: 'activitylog' },
        { component: UploadCsvPage, name: 'UploadCsvPage', segment: 'upload-csv' },
        { component: PretermApplicationModalPage, name: 'PretermApplicationModalPage', segment: 'preterm-modal' },
        { component: AddHrPage, name: 'AddHrPage', segment: 'add-hr' },
        { component: AdminLoginPage, name: 'AdminLoginPage', segment: 'admin-login' },
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents:pages,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CookieService,
    DbProvider,
    AppProvider,
    MediaProvider
  ]
})
export class AppModule {}
