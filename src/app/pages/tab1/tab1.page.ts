import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
data = [
  {
    title: "Bag 1",
    description: "This is small bag",
    price:"100",
    image: "bag1.jpg"
  },
  {
    title: "Bag 2",
    description: "This is medium bag",
    price:"200",
    image: "bag2.jpg"
  },
  {
    title: "Bag 3",
    description: "This is large bag",
    price:"250",
    image: "bag3.jpg"
  }
  

]
  constructor(private toast: ToastController) { }

  async presentToast(message: any){
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    toast.present();
  }

  ngOnInit() {
  }

}
