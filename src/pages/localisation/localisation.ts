import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPage } from '../media/media';
import { RecapPage } from '../recap/recap';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-localisation',
  templateUrl: 'localisation.html',
})
export class LocalisationPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  //Toast pour l'ajout de photo
  showToastMedia(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Ajouter une photo',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  //Fonction pour le clic Media
  OpenMed(){
      this.navCtrl.push(MediaPage);
      this.showToastMedia('down');
  }

  //Toast pour la prochaine page
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Récapitulatif',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
  
  //Fonction pour le clic
  OpenRecap(){
    this.navCtrl.push(RecapPage);
    this.showToast('down');
  }

}