import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-recap',
  templateUrl: 'recap.html',
})
export class RecapPage {
  laDT:Array<{numero: string, date: string, destinataire:string, categorie:string, descriptif: string}>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.laDT= [
        {
          numero: "1",
          date: "15/12/17",
          destinataire: "Direction des services informatiques",
          categorie: "Test",
          descriptif: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
        }
    ]
  }

  confirmValider(){
    let confirm = this.alertCtrl.create({
      title: 'Êtes-vous sûr ?',
      message: 'Un faux signalement de DT peut amener des sanctions.',
      buttons: [
        {
          text: 'Valider',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ah merde',
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