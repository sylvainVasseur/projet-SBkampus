import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RecapPage } from '../recap/recap';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  //Toast pour la prochaine page
  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Récapitulatif',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
  
  //Fonction pour le clic
  OpenRecap(){
    this.navCtrl.push(RecapPage);
    this.showToast('down');
  }
}