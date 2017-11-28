import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DestinatairePage } from '../destinataire/destinataire';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  OpenDest(){
    this.navCtrl.push(DestinatairePage);
  }
}
