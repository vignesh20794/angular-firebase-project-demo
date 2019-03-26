import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from './shared/data.service';


const firebaseConfig = {
apiKey: "AIzaSyBXipqxcAzSwWYQv_ahAJH37PfpPTNUO2g",
    authDomain: "testing-762fd.firebaseapp.com",
    databaseURL: "https://testing-762fd.firebaseio.com",
    projectId: "testing-762fd",
    storageBucket: "testing-762fd.appspot.com",
    messagingSenderId: "909474158587"};

@NgModule({
  imports: [BrowserModule, FormsModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
