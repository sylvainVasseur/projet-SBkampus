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

  dest: string; //Variable de DestinatairePage
  cat: string; //Variable de CategoriePage
  desc: string; //Variable n°1 de DescriptifPage
  date: Date //Variable n°2 de DescriptifPage
  mail: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, destiparam: NavParams, catparam: NavParams, descparam: NavParams, dateparam: NavParams, mailparam: NavParams) {
    this.dest= destiparam.get('dest'); //Récup de DestinatairePage
    this.cat= catparam.get('cat'); //Récup de CategoriePage
    this.desc= descparam.get('desc'); //Récup n°1 de DescriptifPage
    this.date= dateparam.get('date'); // Récup n°2 de DescriptifPage
    this.mail= mailparam.get('mail');
    console.log(this.dest);
    console.log(this.cat);
    console.log(this.desc);
    console.log(this.date);
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
    this.navCtrl.push(RecapPage,{'dest':this.dest, 'cat':this.cat, 'desc':this.desc, 'date':this.date, 'mail':this.mail});
    this.showToast('down');
  }
}