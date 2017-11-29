import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalisationPage } from '../localisation/localisation';
import { MediaPage } from '../media/media';
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
  showToastLoca(position: string) {
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
    this.showToastLoca('down');
  }

  //Toast pour la prochaine page
  showToast(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Ajouter une photo',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  //Fonction pour le clic
  OpenMed(){
      this.navCtrl.push(MediaPage);
      this.showToast('down');
  }
}