import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DestinatairePage } from "../destinataire/destinataire";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    listDT:Array<{numero: string, nom: string, date: string, destinataire:string, descriptif: string}>;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.listDT= [
      {
        numero: "1",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "2",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Descriptif: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "3",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "4",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "5",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "6",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Descriptif: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "7",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "8",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "9",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "10",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "11",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "12",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "13",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "14",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
      {
        numero: "15",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
      },
    ];

  }

  //Toast pour la prochaine page
  showToast(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Choisir le destinataire',
    duration: 2000,
    position: position
    });

    toast.present(toast);
  }
  
  //Fonction pour le clic
  OpenDest(){
    this.navCtrl.push(DestinatairePage);
    this.showToast('down');
  }
}
