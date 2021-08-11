import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import firebase from 'firebase';

firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,    IonicModule,
    HomePageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

  ],
  declarations: [HomePage]
})
export class HomePageModule {}
