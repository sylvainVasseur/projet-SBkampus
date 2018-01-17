import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-valider',
  templateUrl: 'valider.html',
})
export class ValiderPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  
  //Fonction pour le clic
  OpenRecap(){
    this.navCtrl.push(HomePage);
  }
}