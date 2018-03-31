import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ClassService } from '../../providers/class-service/class-service';

/**
 * Generated class for the CreateClassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-class',
  templateUrl: 'create-class.html',
})
export class CreateClassPage {
  title: any;
  module_code: any;
  teacher = localStorage.getItem('uid');
  archived: any;

  classInfo: any;
  request: any;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public classroom: ClassService) {
    this.archived = "No";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateClassPage');
  }

  createClass(){
    this.classInfo = {
      title: this.title,
      module_code: this.module_code,
      teacher: [this.teacher],
      archived: this.archived
    }

    this.request = this.classroom.create(this.classInfo);
    this.request.subscribe((resp) => {
      this.navCtrl.push("ClassPage", {
        title: this.title,
        module_code: this.module_code
      });
      this.viewCtrl.dismiss();
    }, err => {
      console.log("Error");
    })

  }

}
