import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {


  activities = [
    {
      name: "Discussion",
      page: "ChatRoomPage",
    },
    {
      name: "Upload",
      page: "CreateAssignmentPage",
    }
  ];

  nickname = localStorage.getItem('username');
  constructor(public navCtrl: NavController, public navParams: NavParams, private socket: Socket) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  activity(item) {
    if (item.page == 'ChatRoomPage') {
      this.joinChat();
    }

    else {
      this.navCtrl.push(item.page);
    }
  }

  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChatRoomPage', { nickname: this.nickname });
  }

}
