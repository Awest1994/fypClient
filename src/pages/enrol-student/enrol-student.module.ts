import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrolStudentPage } from './enrol-student';

@NgModule({
  declarations: [
    EnrolStudentPage,
  ],
  imports: [
    IonicPageModule.forChild(EnrolStudentPage),
  ],
})
export class EnrolStudentPageModule {}
