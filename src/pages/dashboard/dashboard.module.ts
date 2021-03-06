import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [
    PdfViewerModule,
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
