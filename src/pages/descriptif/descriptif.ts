import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalisationPage } from '../localisation/localisation';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-descriptif',
  templateUrl: 'descriptif.html',
})
export class DescriptifPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  //Récupération de la date d'aujourd'hui
  public event = {
    month: 'today'
  }

  //Toast pour la localisation
  showToast(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Scanner le QRCode',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  //Bouton ajout QRCode
  OpenLoca(){
    this.navCtrl.push(LocalisationPage);
    this.showToast('down');
  }
}