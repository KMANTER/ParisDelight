import { Component } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { AssetsServices } from '../../services/assetsSservices';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'  
})
export class WelcomePage {

  constructor( private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public assetsServices: AssetsServices) {}

 
  ionViewWillEnter(){
    console.log("j'y suis de nouveau !");
  }
  doPageSignup() {
    this.assetsServices.setPreviousPage(this.navCtrl.getActive().component);    
    this.navCtrl.push(SignupPage).then(()=>{
        // first we find the index of the current view controller:
        const index = this.viewCtrl.index;
        // then we remove it from the navigation stack
        this.navCtrl.remove(index);
    });
  }

  doPageLogin() {
    this.assetsServices.setPreviousPage(this.navCtrl.getActive().component);        
    this.navCtrl.push(LoginPage);
  }

}
