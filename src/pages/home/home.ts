import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DestinatairePage } from "../destinataire/destinataire";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    Statut: Array<{numero: string, nom: string, date: string, destinataire:string, descriptif: string,Stat: string}>;
    listDT:Array<{numero: string, nom: string, date: string, destinataire:string, descriptif: string, statut: string}>;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.listDT= [
      {
        numero: "1",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"En cours"
      },
      {
        numero: "2",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Descriptif: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Terminer"
      },
      {
        numero: "3",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Non pris en charge"
      },
      {
        numero: "4",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"En cours"
      },
      {
        numero: "5",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Terminer"
      },
      {
        numero: "6",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Descriptif: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Non pris en charge"
      },
      {
        numero: "7",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"En cours"
      },
      {
        numero: "8",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Non pris en charge"
      },
      {
        numero: "9",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Terminer"
      },
      {
        numero: "10",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Non pris en charge"
      },
      {
        numero: "11",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Terminer"
      },
      {
        numero: "12",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Non pris en charge"
      },
      {
        numero: "13",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"En cours"
      },
      {
        numero: "14",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"Terminer"
      },
      {
        numero: "15",
        nom:"sylvain",
        date: "15/12/17",
        destinataire:"Direction des services informatiques",
        descriptif:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
        statut:"En cours"
      },
    ];
    this.Statut = [];
  for (let i = 0; i < this.listDT.length; i++) {
    if(this.listDT[i].statut == "Terminer"){
      this.Statut.push({
        numero: this.listDT[i].numero,
        nom: this.listDT[i].nom,
        date: this.listDT[i].date,
        destinataire: this.listDT[i].destinataire,
        descriptif: this.listDT[i].descriptif,
        Stat:"assets/imgs/rond-vert.png"
      });
    }else{
      if(this.listDT[i].statut =="En cours"){
             this.Statut.push({
        numero: this.listDT[i].numero,
        nom: this.listDT[i].nom,
        date: this.listDT[i].date,
        destinataire: this.listDT[i].destinataire,
        descriptif: this.listDT[i].descriptif,
      Stat:"assets/imgs/rond-orange.png"
      });
      }
      else{
            this.Statut.push({
        numero: this.listDT[i].numero,
        nom: this.listDT[i].nom,
        date: this.listDT[i].date,
        destinataire: this.listDT[i].destinataire,
        descriptif: this.listDT[i].descriptif,
        Stat:"assets/imgs/rond-rouge.png"
            });
          }
    }
  }
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
