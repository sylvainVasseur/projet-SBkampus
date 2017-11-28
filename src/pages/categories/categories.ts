import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescriptifPage } from '../descriptif/descriptif';


@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController) {

  }

  OpenDesc(){
      this.navCtrl.push(DescriptifPage);
  }

}