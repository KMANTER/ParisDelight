import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, Select, } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupEmailPage } from './signup-email';
import {User} from '../../models/user';
import { AssetsServices } from '../../services/assetsSservices';

//import { UserProvider } from '../../providers/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild('sectionSelect') sectionSelect: Select;  
  form      : FormGroup;
  user: User;
  selectedLanguage: String;
  listLanguage: string[];
  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    public toastCtrl    : ToastController, 
    public assetsServices: AssetsServices) {
      this.form = new FormGroup({
        username        : new FormControl('', Validators.required),
      });
      if(!this.user){
        this.user = new User();      
      }
      this.selectedLanguage = this.assetsServices.getCurrentLanguage();
      this.listLanguage = this.assetsServices.getListLanguage();
  }

  ionViewDidLoad() {
    console.log("I'm alive!");    
  }

  pressNext(form: FormGroup) {
    if (form.valid) {
      this.user.username = this.form.value.username;
      this.navCtrl.push(SignupEmailPage, {
        user: this.user,
      })
    } else {
      this.toastCtrl.create({message: 'Please input your full name.', duration: 4500})
      .present();
    }
  }
  ionViewWillLeave(){
    console.log("Looks like I'm about to leave :(");
  }
  doSelectLanguage() {
    this.sectionSelect.open();
  }
  languageChange(event, selectedLanguage){
    this.assetsServices.setCurrentLanguage(selectedLanguage);
  }
}
