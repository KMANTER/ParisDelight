import {Component, ViewChild} from '@angular/core';
import {Select, NavController} from 'ionic-angular';
import { AssetsServices } from '../../services/assetsSservices';

/**
 * Generated class for the ParisDelightHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Component({
  selector: 'paris-delight-header',
  templateUrl: `paris-delight-header.html`,
  inputs: ['title','showBack']
})
export class ParisDelightHeaderDirective {
  @ViewChild('sectionSelect') sectionSelect: Select;    
  title: string;
  showBack: string = "true";
  selectedLanguage: String;
  listLanguage: string[];
  constructor( public navCtrl: NavController, public assetsServices: AssetsServices) {
    this.selectedLanguage = this.assetsServices.getCurrentLanguage();
    this.listLanguage = this.assetsServices.getListLanguage();
  }
  doSelectLanguage() {
    this.sectionSelect.open();
  }
  languageChange(event, selectedLanguage){
    this.assetsServices.setCurrentLanguage(selectedLanguage);
  }
  goBackPage(){
    this.navCtrl.push(this.assetsServices.getPreviousPage());
  }
}
