import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { ToastController } from 'ionic-angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'page-destinataire',
  templateUrl: 'destinataire.html',
})
export class DestinatairePage {
  ListDestinataire:Array<{destinataire: string}>;
  dest: string="";
  mail: string="";

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
      duration: 1000,
      position: position
    });
    toast.present(toast);
  }
  
  //Fonction pour le clic
  OpenCat(event, item){
    //let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //let result = reg.test(control.value);
    if(this.dest==""){

    let toast = this.toastCtrl.create({
      message: 'Choix d un destinataire obligatoire',
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
    }
    /*else if(this.mail!="" && !result)
    {
      let toast2 = this.toastCtrl.create({
        message: 'Adresse mail invalide',
        duration: 2000,
        position: 'middle'
    });
    }*/
    else{
      this.navCtrl.push(CategoriesPage,{'dest':this.dest, 'mail':this.mail});//envoi vers catégorie
      this.showToast('down');
    }
  }

}