import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescriptifPage } from '../descriptif/descriptif';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  ListCategories:Array<{categorie: string}>;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.ListCategories = [
      {
        "categorie": "Compte utilisateur",
      },
      {
        "categorie": "Matériels",
      },
      {
        "categorie": "Logiciels",
      },
      {
        "categorie": "ENT",
      },
      {
        "categorie": "Sécurité",
      }
    ];
  }

  //Toast pour la prochaine page
  showToast(position: string) {
      let toast = this.toastCtrl.create({
        message: 'Remplir le descriptif',
        duration: 2000,
        position: position
      });

      toast.present(toast);
  }

  //Fonction pour le clic
  OpenDesc(){
      this.navCtrl.push(DescriptifPage);
          this.showToast('down');
  }

}