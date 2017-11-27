import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  services: Array<{title:string,urlImage:string}>;
  constructor(public menu: MenuController) {
    this.services = [
      {title:"BIKE RIDE",urlImage:"assets/img/velotaxi.jpg"},
      {title:"TUKTUK RIDE",urlImage:"assets/img/tuktuk.jpg"},
      {title:"BOAT TRIP",urlImage:"assets/img/boat.jpg"},
    ];
  }
}
