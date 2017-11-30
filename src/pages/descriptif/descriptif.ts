import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalisationPage } from '../localisation/localisation';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-descriptif',
  templateUrl: 'descriptif.html',
})
export class DescriptifPage {

  dest: string; //variable de destinatairepage
  cat: string; //variable de categoriepage
  desc: string; //variable n°1 de descriptifpage
  date: Date //variable n°2 de descriptifpage

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, destiparam: NavParams, catparam: NavParams) {
    this.dest= destiparam.get('dest');// recup de destinatairepage
    this.cat= catparam.get('cat');// recup de categoriepage
    console.log(this.dest);
    console.log(this.cat);
  }

  //Toast pour la localisation
  showToast(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Scanner le QRCode',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  //Bouton ajout QRCode
  OpenLoca(){
    this.navCtrl.push(LocalisationPage,{'dest':this.dest, 'cat':this.cat, 'desc':this.desc, 'date':this.date});
    this.showToast('down');
  }
}