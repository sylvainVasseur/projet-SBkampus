import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalisationPage } from '../localisation/localisation';


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
  OpenLoc(){
      this.navCtrl.push(LocalisationPage);
  }
}