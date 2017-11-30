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
  cat: string; //variable de categoriepage
  mail: string;// var de mail

  constructor(public navCtrl: NavController,public navParams: NavParams, public toastCtrl: ToastController, destiparam: NavParams, mailparam: NavParams) {
    this.ListCategories = [
      {
        categorie: "Compte utilisateur",
      },
      {
        categorie: "Matériels",
      },
      {
        categorie: "Logiciels",
      },
      {
        categorie: "ENT",
      },
      {
        categorie: "Sécurité",
      }
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
      console.log(this.cat);
      this.mail= mailparam.get('mail');
            console.log(this.mail);
      /*while(this.cat=="")
      {

    }*/
  }

  onChange(categorieList){
    this.cat= categorieList;
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
  OpenDesc(event, item){
      this.navCtrl.push(DescriptifPage,{'dest':this.dest, 'cat': this.cat, 'mail':this.mail});
          this.showToast('down');
  }
}