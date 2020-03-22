
import { DialogModalComponent } from './logged/components/dialog-modal/dialog-modal.component';
import { MessageService } from './ServiceGeneral/Message/message.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//config of firebase 
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DialogModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirePerformanceModule,
    ModalModule.forRoot(),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    MessageService,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogModalComponent,

  ]
})
export class AppModule { }
