import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';


@Component({
  selector: 'page-destinataire',
  templateUrl: 'destinataire.html',
})
export class DestinatairePage {

  constructor(public navCtrl: NavController) {

  }

  OpenCat(){
    this.navCtrl.push(CategoriesPage);
  }

}