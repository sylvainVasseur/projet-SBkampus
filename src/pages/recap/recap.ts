import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-recap',
  templateUrl: 'recap.html',
})
export class RecapPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, navParams: NavParams) {
    this.selectedItem = navParams.get("destinataire");
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