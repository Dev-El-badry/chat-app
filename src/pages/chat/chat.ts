import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
//import 'rxjs/add/operator/do';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  //messages: object[] = [];
  subscribtion;
  messages: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
  	this.username = this.navParams.get('username');
  	// this.subscribtion = this.db.list('/chat').subscribe(
  	// 	data => {
  	// 		this.messages = data;
  	// 	}
  	// );
  	//this.messages = this.db.collection('/chat').valueChanges();
    
  	this.messages = this.db.list('/chat').valueChanges();
  	console.log(this.message);
  }

  sendMessage() {
  	// this.db.collection('/chat').push({
  	// 	username: this.username,
  	// 	message: this.message
  	// });
  	// this.db.collection('/chat').add({
  	// 	username: this.username,
  	// 	message: this.message
  	// });

  	this.db.list('/chat').push({
  		username: this.username,
  		message: this.message
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
