import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { EducationPage } from '../education/education';

@IonicPage()
@Component({
  selector: 'page-educ-module-select',
  templateUrl: 'educ-module-select.html',
})
export class EducModuleSelectPage {


	modules = [
		{text:"Financial Education 1"},
		{text:"Financial Education 2"},
		{text:"Financial Education 3"},
		{text:"Financial Education 4"},
		{text:"Financial Education 5"}
	];

	userProgress = {
		curModule : 0
	};
  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EducModuleSelectPage');
  	localStorage.page = 'education';
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }

  goToModule(id:number){
  	let i = id-1;
  	if(this.isnAvailable(i)){
  		let a = this.alert.create({
  			enableBackdropDismiss:true,
  			title: "Course not yet available",
  			subTitle: "Please complete all available modules first",
  			buttons:['Dismiss']
  		});
  		a.present();
  	}else{
  		this.navCtrl.setRoot(EducationPage,{id:id},{animate:true, direction:"top"});
  	}
  }

  isnAvailable(i:number):boolean{
  	return this.userProgress.curModule < i;
  }

}
