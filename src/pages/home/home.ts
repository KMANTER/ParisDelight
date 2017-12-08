import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { Monuments } from '../../models/monument';
import {AssetsServices} from '../../services/assetsSservices'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  services: Array<{title:string,urlImage:string}>;
  listCheckedDestinations: Array<Monuments>;
  selectedDestinationsNumber: number;
  constructor(public menu: MenuController, public assetsServices: AssetsServices) {
    this.services = [
      {title:"BIKE RIDE",urlImage:"assets/img/velotaxi.jpg"},
      {title:"TUKTUK RIDE",urlImage:"assets/img/tuktuk.jpg"},
      {title:"BOAT TRIP",urlImage:"assets/img/boat.jpg"},
    ];
    this.listCheckedDestinations = assetsServices.mockListDestinations();
    this.selectedDestinationsNumber = 0;
  }
  toggleSelect(element: number){
    console.log("Le monumum "+this.listCheckedDestinations[element].name+" est selectionné ? " + this.listCheckedDestinations[element].checked);
    this.listCheckedDestinations[element].checked = !this.listCheckedDestinations[element].checked;
    this.setSelectedDestinationsNumber(this.listCheckedDestinations[element].checked);
  }
  setSelectedDestinationsNumber(increment: boolean){
    increment ? this.selectedDestinationsNumber ++ : this.selectedDestinationsNumber--;
  }

}
