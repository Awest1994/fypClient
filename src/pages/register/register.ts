import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username: any;
  password: any;
  university: any;
  token: any;

  userInfo: any;
  request: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  goToLogin() {
    this.navCtrl.setRoot(HomePage);
  }
  goToDash() {
    this.navCtrl.setRoot('DashboardPage');
  }

  register() {
    this.userInfo = {
      email: this.username,
      password: this.password,
      university: this.university
    }

    this.request = this.auth.register(this.userInfo);
    this.request.subscribe((resp) => {

      if (resp.status) {
        console.log("Teacher Registered");
        console.log(resp);
        localStorage.setItem('username', this.username);
        localStorage.setItem('uid', resp.account._id);
        localStorage.setItem('Role', resp.account.role);
        this.goToDash();
      }
      else if(!resp.status){
        console.log("Error");
      }
      else {
        console.log("Error");
      }
    }, err => {

      console.log(err + " :Error");
    })


  }

}
