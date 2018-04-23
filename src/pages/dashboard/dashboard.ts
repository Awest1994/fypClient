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
    role: "Teacher",
    university: "Test University"
  };
  userClasses = [
    // {
    //   title: "Test",
    //   module_code: "Test_Code"
    // },
    // {
    //   title: "Test",
    //   module_code: "Test_Code"
    // },
    // {
    //   title: "Test",
    //   module_code: "Test_Code"
    // },
    // {
    //   title: "Test",
    //   module_code: "Test_Code"
    // },
    // {
    //   title: "Test",
    //   module_code: "Test_Code"
    // },
    // {
    //   title: "Test",
    //   module_code: "Test_Code"
    // }
  ];

  userAssignments = [
    {
      Title: "Lab 1",
      Module: "CSCR055"
    },
    {
      Title: "Lab 2",
      Module: "CS055"
    },
    {
      Title: "Lab 1",
      Module: "CR000"
    }
  ];
  
  userGroups = [
    {
      name: "Introduction to Classroom - Square",
      students: [],
      activities: []
    }
    //,
    // {
    //   name: "Class name - A",
    //   students: [],
    //   activities: []
    // },
    // {
    //   name: "Class name - A",
    //   students: [],
    //   activities: []
    // }
  ];
  pdfSrc: String = "https://vadimdez.github.io/ng2-pdf-viewer/pdf-test.pd";
  userFiles = [
    {
      name: this.pdfSrc,
      students: [],
      activities: []
    }
    ,
    // {
    //   name: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf",
    //   students: [],
    //   activities: []
    // },
    // {
    //   name: "Class name - A",
    //   students: [],
    //   activities: []
    // }
  ];

  role = false;
  request: any;

  requestData = {
    email: localStorage.getItem("username")
  }

  token = localStorage.getItem("myToken");

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public auth: AuthService, public classroom: ClassService) {
    
  }

  ionViewDidLoad() {
    //console.log("ionViewDidLoad");
    if(this.userInfo.role == "Teacher" || this.userInfo.role == "teacher"){
      this.role = true;
    }
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

  goToGroup(){
    this.navCtrl.push("GroupsPage");
  }

  goToAssignment() {
    this.navCtrl.push("AssignmentPage");
  }

  goToProfile() {
    this.navCtrl.push("ProfilePage", {info: this.userInfo});
  }

  goToUpload(){
    let modal = this.modalCtrl.create('CreateAssignmentPage');
    modal.present();
  }

  goToPDF(url){
    this.navCtrl.push("PdfPage", {
      url: url
    });
  }

  goToCreateClass() {
    let modal = this.modalCtrl.create("CreateClassPage");
    modal.present();
  }

  goToCreateAssign() {
    let modal = this.modalCtrl.create("ActivitiesPage");
    modal.present();
  }

  goToCreateGroup(){
    let modal = this.modalCtrl.create("CreateGroupsPage");
    modal.present();
  }

  getUserInfo() {
    //console.log('user information');
    this.request = this.auth.getUserInfo(localStorage.getItem('username'));
    this.request.subscribe((resp) => {
      //console.log(resp);
      this.userInfo.name = resp.name.first;
      this.userInfo.university = resp.university;
      this.userInfo.role = resp.role;
      this.userClasses = resp.classes;
      // this.userGroups = resp.groups;
      //this.userFiles = resp.files;
      
    }, err => {
      console.log(err + " : Error");
    });
  }
}
