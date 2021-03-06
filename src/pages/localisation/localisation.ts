import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPage } from '../media/media';
import { RecapPage } from '../recap/recap';
import { ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@Component({
  selector: 'page-localisation',
  templateUrl: 'localisation.html',
})
export class LocalisationPage {

  dest: string; //Variable de DestinatairePage
  cat: string; //Variable de CategoriePage
  cat2: string;
  cat3: string;
  desc: string; //Variable n°1 de DescriptifPage
  date: Date //Variable n°2 de DescriptifPage
  mail: string;
  
  public base64Image: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, destiparam: NavParams, catparam: NavParams, descparam: NavParams, dateparam: NavParams, mailparam: NavParams, private camera: Camera, private qrScanner: QRScanner) {
    this.dest= destiparam.get('dest'); //Récup de DestinatairePage
    this.cat= catparam.get('cat'); //Récup de CategoriePage
    this.cat2= catparam.get('cat2');
    this.cat3= catparam.get('cat3');
    this.desc= descparam.get('desc'); //Récup n°1 de DescriptifPage
    this.date= dateparam.get('date'); // Récup n°2 de DescriptifPage
    this.mail= mailparam.get('mail');
    console.log(this.dest);
    console.log(this.cat);
    console.log(this.desc);
    console.log(this.date);
  }

    Qrscan(){
       this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
     if (status.authorized) {
       // camera permission was granted


       // start scanning
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanSub.unsubscribe(); // stop scanning
       });

       // show camera preview
       this.qrScanner.show();

       // wait for user to scan something, then the observable callback will be called

     } else if (status.denied) {
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Erreur QR COde', e));
     } 

    takePicture(){
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
   let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("erreur appareil photo");

    // Handle error
   });

   
  }

  //Toast pour l'ajout de photo
  showToastMedia(position: string) {
    let toast = this.toastCtrl.create({
    message: 'Ajouter une photo',
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  //Fonction pour le clic Media
  OpenMed(){
      this.navCtrl.push(MediaPage);
      this.showToastMedia('down');
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
    this.navCtrl.push(RecapPage,{'dest':this.dest, 'cat':this.cat, 'cat2':this.cat2, 'cat3':this.cat3, 'desc':this.desc, 'date':this.date, 'mail':this.mail});
    this.showToast('down');
  }
}