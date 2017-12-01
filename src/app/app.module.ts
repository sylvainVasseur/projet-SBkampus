import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DestinatairePage } from '../pages/destinataire/destinataire';
import { CategoriesPage } from '../pages/categories/categories';
import { DescriptifPage } from '../pages/descriptif/descriptif';
import { LocalisationPage } from '../pages/localisation/localisation';
import { MediaPage } from '../pages/media/media';
import { RecapPage } from '../pages/recap/recap';
import { ValiderPage } from '../pages/valider/valider';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QRScanner } from "@ionic-native/qr-scanner";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DestinatairePage,
    CategoriesPage,
    DescriptifPage,
    LocalisationPage,
    MediaPage,
    RecapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DestinatairePage,
    CategoriesPage,
    DescriptifPage,
    LocalisationPage,
    MediaPage,
    RecapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    QRScanner
  ]
})
export class AppModule {}
