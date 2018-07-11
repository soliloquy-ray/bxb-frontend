import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';  

declare var mobilecheck; //fn to check for screen type

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  isMobile : boolean = mobilecheck();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  reorient($event){
    this.isMobile = mobilecheck();
  }

}

