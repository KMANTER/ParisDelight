import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { 
  FormGroup, 
  FormControl, 
  Validators } from '@angular/forms';

//import { UserProvider } from '../../providers/user';
import { ProfileCompletePage } from './profile-complete';
import {User} from '../../models/user';

@Component({
  selector: 'page-signup-password',
  templateUrl: 'signup-password.html'
})
export class SignupPasswordPage {
  form      : FormGroup;
  user  : User;
  
  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    public toastCtrl    : ToastController
    //public userProvider : UserProvider
  ) {
    this.form = new FormGroup({
      password        : new FormControl('', Validators.required),
      confirmpassword : new FormControl('', Validators.required),
    });

    this.user = navParams.get('user');
    
  }

  ionViewDidLoad() {}

  pressNext(form: FormGroup) {
    if (form.valid) {
      if (form.value.password != form.value.confirmpassword) {
        this.toastCtrl.create({message: 'Password is incorrect. Confirm your password again.', duration: 4500})
             .present();
        return;
      }
      this.user.password = form.value.password;
      this.navCtrl.push(ProfileCompletePage, {
        user: this.user
      })
    } else {
      this.toastCtrl.create({message: 'Please input your password.', duration: 4500})
      .present();
    }
  }
}
