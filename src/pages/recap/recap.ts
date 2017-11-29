import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-recap',
  templateUrl: 'recap.html',
})
export class RecapPage {
  laDT:Array<{numero: string, date: string, destinataire:string, categorie:string, descriptif: string}>;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
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

}