import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileUploader, FileDropDirective, FileSelectDirective} from 'ng2-file-upload';

/**
 * Generated class for the CreateAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const URL = 'http://localhost:3000/upload';


@IonicPage()
@Component({
  selector: 'page-create-assignment',
  templateUrl: 'create-assignment.html'
})
export class CreateAssignmentPage {

  uploader:FileUploader = new FileUploader({url: URL});

  attachmentList: any = [];

  public hasBaseDropZoneOver:boolean;
  public hasAnotherDropZoneOver:boolean;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(response);
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAssignmentPage');
  }

}
