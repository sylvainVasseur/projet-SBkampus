import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescriptifPage } from '../descriptif/descriptif';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  //Liste principale
  ListCategories:Array<{categorie: string}>;


  //Autres listes
  ListCompteUtilisateur:Array<{useracc: string}>;
  ListMateriels:Array<{materiels: string}>;
  ListLogiciels:Array<{logiciels: string}>;
  ListENT:Array<{ent: string}>;
  ListSecurite:Array<{securite: string}>;
  dest: string; //variable de destinatairepage

  constructor(public navCtrl: NavController,public navParams: NavParams, public toastCtrl: ToastController, destiparam: NavParams) {
    this.ListCategories = [
      {
        categorie: "Compte utilisateur",
      },
      {
        categorie: "Matériels",
      },
      {
        categorie: "Logiciels",
      }/*,
      {
        categorie: "ENT",
      },
      {
        categorie: "Sécurité",
      }*/
    ];

    this.ListCompteUtilisateur = [
      {
        useracc: "Mot de passe",
      },
      {
        useracc: "Restauration de fichiers",
      },
      {
        useracc: "Suppression de compte",
      }
    ];

    this.ListMateriels = [
      {
        materiels: "Panne"
      },
      {
        materiels: "Installation"
      },
      {
        materiels: "Demande de matériel"
      }
    ];

    this.ListLogiciels = [
      {
        logiciels: "Installation"
      },
      {
        logiciels: "Logiciels bureautique"
      }
    ];
      this.dest= destiparam.get('dest');// recup de destinatairepage
      console.log(this.dest);
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