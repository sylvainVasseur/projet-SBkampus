import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-recap',
  templateUrl: 'recap.html',
})
export class RecapPage {
  dest: string; //Variable de DestinatairePage
  cat: string; //Variable de CategoriePage
  desc: string; //Variable n°1 de DescriptifPage
  date: Date //Variable n°2 de DescriptifPage
  mail: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, navParams: NavParams, destiparam: NavParams, catparam: NavParams, descparam: NavParams, dateparam: NavParams, mailparam: NavParams) {
    this.dest= destiparam.get('dest'); //Récup de DestinatairePage
    this.cat= catparam.get('cat'); //Récup de CategoriePage
    this.desc= descparam.get('desc'); //Récup n°1 de DescriptifPage
    this.date= dateparam.get('date'); // Récup n°2 de DescriptifPage
    this.mail= mailparam.get('mail');
    console.log(this.dest);
    console.log(this.cat);
    console.log(this.desc);
    console.log(this.date);

    if (this.mail=="")
    {
      this.mail = "Aucun mail indiqué.";
    }
  }

  confirmValider(){
    let confirm = this.alertCtrl.create({
      title: 'Êtes-vous sûr ?',
      message: 'Un faux signalement de DT peut entrainer des sanctions.',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.navCtrl.push(HomePage);
            console.log('agree clicked');
          }
        },
        {
          text: 'Non',
          handler: () => {
            console.log('disAgree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  confirmRetour(){
    let confirm = this.alertCtrl.create({
      title: 'Êtes-vous sûr ?',
      message: 'Les données que vous venez de rentrer dans les formulaires seront perdues.',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            this.navCtrl.push(HomePage);
            console.log('disAgree clicked');
          }
        },
        {
          text: 'Non',
          handler: () => {
            console.log('disAgree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}