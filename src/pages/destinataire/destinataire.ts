import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-destinataire',
  templateUrl: 'destinataire.html',
})
export class DestinatairePage {
  ListDestinataire:Array<{destinataire: string}>;
  dest: string='';
  mail: string='';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    this.ListDestinataire = [
      {
        destinataire: "Direction du systeme d'information",
      },
      {
        destinataire: "IUT Service Informatique",
      },
      {
        destinataire: "Service Informatique Transversale",
      },
      {
        destinataire: "Sonel",
      },
      {
        destinataire: "STU Maintenance",
      },
      {
        destinataire: "@ctice",
      }
    ];
  }
  
  onChange(destinataireList){
    console.log("Choix destinataire: ",destinataireList);
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
  
  //Fonction pour le clic
  OpenCat(event, item){
    this.navCtrl.push(CategoriesPage,{'dest':this.dest, 'mail':this.mail});//envoi vers catégorie
    this.showToast('down');
  }

}