import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-recap',
  templateUrl: 'recap.html',
})
export class RecapPage {
  dest: string; //variable de destinatairepage
  cat: string; //variable de categoriepage
  desc: string; //variable n°1 de descriptifpage
  date: Date //variable n°2 de descriptifpage

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, navParams: NavParams, destiparam: NavParams, catparam: NavParams, descparam: NavParams, dateparam: NavParams) {
    this.dest= destiparam.get('dest');// recup de destinatairepage
    this.cat= catparam.get('cat');// recup de categoriepage
    this.desc= descparam.get('desc');// recup n°1 de descriptifpage
    this.date= dateparam.get('date');// recup n°2 de descriptifpage
    console.log(this.dest);
    console.log(this.cat);
    console.log(this.desc);
    console.log(this.date);
  }

  confirmValider(){
    let confirm = this.alertCtrl.create({
      title: 'Êtes-vous sûr ?',
      message: 'Un faux signalement de DT peut amener des sanctions.',
      buttons: [
        {
          text: 'Oui',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Non',
          handler: () => {
            console.log('Agree clicked');
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
          }
        },
        {
          text: 'Non',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}