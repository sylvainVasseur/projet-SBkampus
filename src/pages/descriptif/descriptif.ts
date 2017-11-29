import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPage } from '../media/media';


@Component({
  selector: 'page-descriptif',
  templateUrl: 'descriptif.html',
})
export class DescriptifPage {

  constructor(public navCtrl: NavController) {

  }

  //Récupération de la date d'aujourd'hui
  public event = {
    month: 'today'
  }

  //Fonction pour le clic
  OpenMed(){
      this.navCtrl.push(MediaPage);
  }
}