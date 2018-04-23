import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Socket } from 'ng-socket-io';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userInfo = this.navParams.get('info');
    console.log(this.userInfo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  // joinChat(){
  //   this.socket.connect();
  //   this.socket.emit('set-nickname', this.nickname);
  //   this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  // }

}
