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

  name: any;
  nameArray: any;
  first: any;
  last: any;
  email: any;
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
    this.nameArray = this.name.split(" ");
    this.first = this.nameArray[0];
    this.last = this.nameArray[1];

    this.userInfo = {
      name:{
        first: this.first,
        last: this.last
      },
      email: this.email,
      password: this.password,
      university: this.university,
      token: this.token
    }

    this.request = this.auth.register(this.userInfo);
    this.request.subscribe((resp) => {

      if (!resp.status) {
        console.log("Teacher Registered");
        console.log(resp);
        localStorage.setItem('email', this.email);
        localStorage.setItem('uid', resp.account._id);
        localStorage.setItem('info', resp);
        // localStorage.setItem('Role', resp.account.role);
        this.goToDash();
      }
      else if(resp.status){
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
