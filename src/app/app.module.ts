import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentsModule } from '../components/components.module';

import { AccountLinkComponent } from '../components/account-link/account-link';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignupTinPage } from '../pages/signup-tin/signup-tin';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HrDashboardPage } from '../pages/hr-dashboard/hr-dashboard';
import { TermsPage } from '../pages/terms/terms';
import { LoansPage } from '../pages/loans/loans';

import { DisclosureStatementPage } from '../pages/disclosure-statement/disclosure-statement';

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
  DisclosureStatementPage
];

@NgModule({
  declarations:pages,
  imports: [
    ComponentsModule,
    BrowserModule,
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
