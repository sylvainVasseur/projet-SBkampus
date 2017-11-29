import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-destinataire',
  templateUrl: 'destinataire.html',
})
export class DestinatairePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  //Toast pour la prochaine page
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Choisir la catégorie',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
//fonction pour le clique
  OpenCat(){
    this.navCtrl.push(CategoriesPage);
    this.showToast('down');
  }

}