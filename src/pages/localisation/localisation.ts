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

  dest: string; //variable de destinatairepage
  cat: string; //variable de categoriepage
  desc: string; //variable n°1 de descriptifpage
  date: Date //variable n°2 de descriptifpage

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, destiparam: NavParams, catparam: NavParams, descparam: NavParams, dateparam: NavParams) {
    this.dest= destiparam.get('dest');// recup de destinatairepage
    this.cat= catparam.get('cat');// recup de categoriepage
    this.desc= descparam.get('desc');// recup n°1 de descriptifpage
    this.date= dateparam.get('date');// recup n°2 de descriptifpage
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
    this.navCtrl.push(RecapPage,{'dest':this.dest, 'cat':this.cat, 'desc':this.desc, 'date':this.date});
    this.showToast('down');
  }

}