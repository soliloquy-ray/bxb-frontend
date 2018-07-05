import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

var pages = [
  MyApp,
  HomePage,
  LoginPage,
  SignUpPage
];

@NgModule({
  declarations:pages,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: SignUpPage, name: 'SignUpPage', segment: 'sign-up' },
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
