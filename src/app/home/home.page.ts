import { Component } from '@angular/core';
import { MgaGagoPage } from '../mga-gago/mga-gago.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rajTitle = "Raj App";

  constructor(public navCtrl: NavController){

  }


}
