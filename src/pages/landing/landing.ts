import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/registerController';
import { LoginController } from '../logiin/loginController';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
  public goToPage(page: string):void{
      if(page === "login"){
        this.navCtrl.push(LoginController, {}, {animate: true});        
      }else if(page === "register"){
        this.navCtrl.push(RegisterPage, {}, {animate: true});        
      }
  }
}
