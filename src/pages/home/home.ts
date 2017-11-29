import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DestinatairePage } from "../destinataire/destinataire";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  //Toast pour la prochaine page
  showToast(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Choisir le destinataire',
    duration: 2000,
    position: position
    });

    toast.present(toast);
  }
  
  //Fonction pour le clic
  OpenDest(){
    this.navCtrl.push(DestinatairePage);
    this.showToast('down');
  }
}
