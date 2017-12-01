import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescriptifPage } from '../descriptif/descriptif';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  //Liste principale
  ListCategories:Array<{categorie: string}>;
  //Autres listes
  ListMateriel:Array<{categorie: string}>;
  ListPanne:Array<{categorie: string}>;

  dest: string; //variable de destinatairepage
  cat: string=""; //variable de categoriepage
  cat2: string="";
  cat3: string="";
  mail: string;// var de mail

  Liste2: Array<any>;
  Liste3: Array<any>;

  constructor(public navCtrl: NavController,public navParams: NavParams, public toastCtrl: ToastController, destiparam: NavParams, mailparam: NavParams, listeparam: NavParams) {
    this.ListCategories = [
      {
        categorie: "Matériels",
      },
      {
        categorie: "Logiciels",
      },
      {
        categorie: "Compte utilisateur",
      },
      {
        categorie: "ENT",
      },
      {
        categorie: "Sécurité",
      }
    ];

    this.ListMateriel = [
      {
        categorie: "Demande de devis",
      },
      {
        categorie: "Deamnde de matériel",
      },
      {
        categorie: "Destockage",
      },
      {
        categorie: "Installation",
      },
      {
        categorie: "Panne",
      }
    ];

    this.ListPanne = [
      {
        categorie: "Vidéoprojecteur"
      },
      {
        categorie: "Écrans"
      },
      {
        categorie: "Imprimante"
      },
      {
        categorie: "Ordinateur fixe"
      },
      {
        categorie: "Ordinateur portable"
      }
    ];
      this.dest= destiparam.get('dest');// recup de destinatairepage
      this.mail= mailparam.get('mail');
      console.log(this.dest);
      console.log(this.cat);      
      console.log(this.mail);
  }

  onChange(categorieList){
    this.cat= categorieList;
    /*if (this.cat=="Compte Utilisateur")
    {
      for (let i = 0; i < this.ListCompteUtilisateur.length; i++)
      this.Liste2.push({
        categorie: this.ListCompteUtilisateur[i]
      });
      this.navCtrl.push(CategoriesPage, {
        'liste':this.Liste2,
      })
    }
    else if (this.cat=="Matériel")
    {
      for (let i = 0; i < this.ListMateriels.length; i++)
      this.Liste2.push({
        categorie: this.ListMateriels[i]
      });
    }
    console.log(this.Liste2);*/
    console.log(this.cat);
  }

  //Toast pour la prochaine page
  showToast(position: string) {
      let toast = this.toastCtrl.create({
        message: 'Remplir le descriptif',
        duration: 1000,
        position: position
      });

      toast.present(toast);
  }

  //Fonction pour le clic
  OpenDesc(event, item){
    if(this.cat == "" || this.cat2 == "" || this.cat3 == ""){
      let toast = this.toastCtrl.create({
      message: 'Saisir une catégorie',
      duration: 1000,
      position: 'middle'
    });
    toast.present(toast);
    }
    else
    {
      this.navCtrl.push(DescriptifPage,{'dest':this.dest, 'cat': this.cat, 'cat2': this.cat2, 'cat3': this.cat3, 'mail':this.mail});
      this.showToast('down');
    }
  }
}