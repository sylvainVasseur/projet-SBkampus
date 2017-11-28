import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { DestinatairePage } from "../destinataire/destinataire";
=======
import { DestinatairePage } from '../destinataire/destinataire';
>>>>>>> 4c18341e93e15bbd1eb61d57f5dd3f077462d41f

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

  openDest(){
    this.navCtrl.push(DestinatairePage);
  }

}
