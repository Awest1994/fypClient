import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ClassService } from '../../providers/class-service/class-service';
/**
 * Generated class for the ClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class',
  templateUrl: 'class.html',
})
export class ClassPage {

  class: any;
  title: any;
  module_code: any;
  refreshInfo: any;
  request: any;

  studentList = [{
    email: 'Test',
    university: 'Test Unversity'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams, public test: ClassService, public modalCtrl: ModalController) {
    this.class = this.navParams.get('class');
    this.title = this.class.title;
    this.module_code = this.class.module_code;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassPage');
    this.request = this.test.getStudents(this.module_code);
    this.request.subscribe((resp) => {
      console.log(resp);
      this.studentList = resp;
    }, err => {
      console.log(err + " : Error");
    });

  }

  goToEnrol(){
    let modal = this.modalCtrl.create('EnrolStudentPage');
    modal.present();
  }

}
