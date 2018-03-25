import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') user;

  constructor(public navCtrl: NavController, public alertCtrl :AlertController) {

  }

  startChat() {
  	//console.log(this.user.valu);
  	if(/^[a-zA-Z0-9]+$/.test(this.user.value)) {
  		this.navCtrl.push(ChatPage, {
  			username: this.user.value
  		});
  	} else {
  		this.showAlert('Username Invaild', 'Must Username Jsut Contain Number And Letters');
  	}
  }

  showAlert(title: string, message: string) {
  	let alertBox = this.alertCtrl.create({
  		title: title,
  		subTitle: message,
  		buttons: ['OK']
  	});

  	alertBox.present();
  }

}
