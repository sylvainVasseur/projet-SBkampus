import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescriptifPage } from '../descriptif/descriptif';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Remplir le descriptif',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }
  OpenDesc(){
      this.navCtrl.push(DescriptifPage);
          this.showToast('down');
  }

}