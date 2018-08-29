import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ModalController, Modal } from 'ionic-angular';

import { DbProvider } from '../../providers/db/db';

@IonicPage()
@Component({
  selector: 'page-activity-log',
  templateUrl: 'activity-log.html'
})
export class ActivityLogPage {

	logs = [
		{
			timestamp:'April 12, 2018 12:04',
			user:'6805 Ayala Avenue Condominium Corporation',
			userType:'Company',
			event:'uploaded csv file',
			ipAddress:'10.0.0.44'
		},
		{
			timestamp:'April 13, 2018 07:04',
			user:'BXB Employee Solutions Corp',
			userType:'Company',
			event:'uploaded csv file',
			ipAddress:'10.0.0.44'
		},
		{
			timestamp:'April 14, 2018 01:04',
			user:'George Miguel',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.44'
		},
		{
			timestamp:'April 14, 2018 01:04',
			user:'George Miguel',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		},
		{
			timestamp:'April 15, 2018 01:04',
			user:'George Miguel',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		},
		{
			timestamp:'April 27, 2018 02:04',
			user:'Argie Dwight',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		},
		{
			timestamp:'April 27, 2018 03:04',
			user:'Argie Dwight',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.44'
		},
		{
			timestamp:'April 27, 2018 05:04',
			user:'George Miguel',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.44'
		},
		{
			timestamp:'April 27, 2018 05:04',
			user:'George Miguel',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.44'
		},
		{
			timestamp:'May 03, 2018 06:05',
			user:'Fercibal',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		},
		{
			timestamp:'May 03, 2018 06:05',
			user:'Maria Jacqueline',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		},
		{
			timestamp:'May 03, 2018 07:05',
			user:'Fercibal',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		},
		{
			timestamp:'May 03, 2018 08:05',
			user:'Maria Jacqueline',
			userType:'Employee',
			event:'request for loan',
			ipAddress:'10.0.0.57'
		}
	];

	hdrTitles = {
		'timestamp':'Timestamp',
		'user':'User',
		'userType':'User Type',
		'event':'Event',
		'ipAddress':'IP Address'
	};
	sampKeys = ["timestamp","user","userType","event","ipAddress"];
	formats = {
	};
	actions = [
	];

	mod:Modal;
  constructor(public navCtrl: NavController, public navParams: NavParams, private menu: MenuController, /*private db: DbProvider, private loader: LoadingController,*/ private modal: ModalController) {
  }

  ionViewDidEnter() {
  	this.menu.close();
  	localStorage.page = 'logs';
  }


  ionViewWillLeave(){
  }

  isMobile(){
  	return localStorage.view == "mobile";
  }
}
