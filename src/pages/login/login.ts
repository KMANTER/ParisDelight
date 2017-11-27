import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { 
  FormGroup, 
  FormControl, 
  Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

//import { UserProvider } from '../../providers/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form      : FormGroup;
  submitted : boolean = false;

  constructor(
    public navCtrl      : NavController, 
    public navParams    : NavParams,
    public loadingCtrl  : LoadingController,
    //public userProvider : UserProvider,
    public toastCtrl    : ToastController,
    public storage      : Storage
  ) {
    this.form = new FormGroup({
      email     : new FormControl('', Validators.required),
      password  : new FormControl('', Validators.required)
    });
  }

  ionViewDidLoad() {}

  doLogin(form: FormGroup) {
    this.submitted = true;
    if (this.form.valid) { // } && this.availableEmail()) {
      let loading = this.loadingCtrl.create();
      loading.present();
      this.navCtrl.setRoot(HomePage);
      loading.dismiss();
      
      /*this.userProvider.signInWithEmail(form.value)
        .then(res=> {
          loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
          this.storage.ready().then(() => {
            this.storage.set('password', form.value.password);
          });
        })
        .catch((error)=> {
            loading.dismiss();
            console.log('Error: ' + JSON.stringify(error));
            let errorMessage = "Email or Password is not match. Please check your login information again."
            this.toastCtrl.create({message: errorMessage, duration: 4500})
              .present();
        });*/
    } else {
      let errorMessage = "Innvaild email format or password is empty."
      this.toastCtrl.create({message: errorMessage, duration: 4500})
              .present();
    }
  }

  private availableEmail(): boolean {
    let validEmailDomain = "berkshireschool.org";
    return (this.form.value.email.indexOf(validEmailDomain) > -1)
  }

  doPageSignup() {
    this.navCtrl.push(SignupPage);
  }

  doForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }

}
