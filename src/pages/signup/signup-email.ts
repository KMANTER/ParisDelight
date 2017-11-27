import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { 
  FormGroup, 
  FormControl, 
  Validators } from '@angular/forms';

//import { UserProvider } from '../../providers/user';
import { SignupPasswordPage } from './signup-password';
import {User} from '../../models/user';

@Component({
  selector: 'page-signup-email',
  templateUrl: 'signup-email.html'
})
export class SignupEmailPage {
  form      : FormGroup;
  user  : User;

  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    public toastCtrl    : ToastController,
    //public userProvider : UserProvider
  ) {
    this.form = new FormGroup({
      email        : new FormControl('', Validators.required),
    });
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {}

  pressNext(form: FormGroup) {
    if (form.valid) {
      this.user.email = form.value.email;
      this.navCtrl.push(SignupPasswordPage, {
        user : this.user
      });
    } else {
      this.toastCtrl.create({message: 'Please input your email address.', duration: 4500})
      .present();
    }
  }
}
