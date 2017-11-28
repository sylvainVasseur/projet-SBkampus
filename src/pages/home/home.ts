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
   showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Choisir le destinataire',
      duration: 3000,
      position: position
    });

    toast.present(toast);
  }
  
  OpenDest(){
    this.navCtrl.push(DestinatairePage);
    this.showToast('down');
  }
}
