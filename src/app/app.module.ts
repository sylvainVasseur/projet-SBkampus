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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DestinatairePage,
    CategoriesPage,
    DescriptifPage
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
    DescriptifPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
