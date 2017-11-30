import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalisationPage } from '../localisation/localisation';
import { ToastController } from 'ionic-angular';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'page-descriptif',
  templateUrl: 'descriptif.html',
})
export class DescriptifPage {

  dest: string; //Variable de DestinatairePage
  cat: string; //Variable de CategoriePage
  desc: string=""; //Variable n°1 de DescriptifPage
  date: Date; //Variable n°2 de DescriptifPage
  mail: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, destiparam: NavParams, catparam: NavParams, mailparam: NavParams) {
    this.dest= destiparam.get('dest'); //Récup de DestinatairePage
    this.cat= catparam.get('cat'); //Récup de CategoriePage
    this.mail= mailparam.get('mail');
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
    if(this.desc == ""){
      let toast = this.toastCtrl.create({
      message: 'Saisir un descriptif ',
      duration: 1000,
      position: 'middle'
    });
    toast.present(toast);
    }else{
    this.navCtrl.push(LocalisationPage,{'dest':this.dest, 'cat':this.cat, 'desc':this.desc, 'date':this.date});
    this.showToast('down');
    }
  }
}