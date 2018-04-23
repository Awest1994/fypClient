import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {

  pdfSrc: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pdfSrc = navParams.get('url');
    // this.pdfSrc = {
    //   url: this.pdfSrc,
    //   withCredentials: false
    // }
    console.log(this.pdfSrc);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfPage');
  }

}
