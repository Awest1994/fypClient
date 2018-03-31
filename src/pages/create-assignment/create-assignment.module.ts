import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAssignmentPage } from './create-assignment';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    CreateAssignmentPage
    
  ],
  imports: [
    FileUploadModule,
    IonicPageModule.forChild(CreateAssignmentPage)
  ],
})
export class CreateAssignmentPageModule {}
