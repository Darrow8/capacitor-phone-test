import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
