import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { AuthService } from '../../providers/auth-service/auth-service';
import { ClassService } from '../../providers/class-service/class-service';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  userInfo = {
    name: "Test",
    role: "Test",
    university: "Test University"
  }
  userAssignments = [
    // {
    //   Title: "Lab 1",
    //   Module: "CS424"
    // }
  ];
  userClasses = [
    {
      title: "Test",
      module_code: "Test_Code"
    }
  ];

  request: any;
  requestData = {
    email: localStorage.getItem("username")
  }

  token = localStorage.getItem("myToken");

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public auth: AuthService, public classroom: ClassService) {
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad");
    this.getUserInfo();
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
    localStorage.clear();
  }

  goToClass(item) {
    this.navCtrl.push("ClassPage", {
      class: item
    });
  }

  goToAssignment() {
    this.navCtrl.push("AssignmentPage");
  }

  goToProfile() {
    this.navCtrl.push("ProfilePage");
  }

  goToCreateClass() {
    let modal = this.modalCtrl.create("CreateClassPage");
    modal.present();
  }

  goToCreateAssign() {
    let modal = this.modalCtrl.create("CreateAssignmentPage");
    modal.present();
  }

  getUserInfo() {
    console.log('user information');
    this.request = this.auth.testUser(this.token, this.requestData);
    this.request.subscribe((resp) => {
      this.userInfo.name = resp.account.email;
      this.userInfo.role = resp.account.role;
      this.userInfo.university = resp.account.university;

      localStorage.setItem('uid', resp.account._id);
    }, err => {
      console.log(err + " : Error");
    });

    this.request = this.classroom.getClasses(localStorage.getItem('uid'));
    this.request.subscribe((resp) => {
      this.userClasses = resp.classes;
    }, err => {
      console.log(err + " : Error");
    });
  }

}
