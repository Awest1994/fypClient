import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: any;
  password: any;

  userInfo: any;
  request: any;

  constructor(public navCtrl: NavController, public auth: AuthService) { }

  goToDash() {
    this.navCtrl.setRoot('DashboardPage');
  }

  goToRegister(){
    this.navCtrl.setRoot("RegisterPage");
  }

  login() {
    this.userInfo = {
      email: this.username,
      password: this.password
    }

    this.request = this.auth.login(this.userInfo);
    this.request.subscribe((resp) => {

      if (resp != null || resp != undefined) {

        if (!resp.status) console.log("Email not found");
        else {
          //console.log("info saved")
          localStorage.setItem('username', this.username);
          localStorage.setItem('myToken', resp.user.token);
          this.goToDash();
        }
      }
      else {
        console.log("Error");
      }
    }, err => {

      console.log(err + " :error");

    });
  }

}
