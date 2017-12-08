import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { AssetsServices } from '../services/assetsSservices';

import { HomePage } from '../pages/home/home';
//import { LandingPage } from '../pages/landing/landing';
import { WelcomePage } from '../pages/welcome/welcome';
import { transition } from '@angular/core/src/animation/dsl';
//import { LoginController } from '../pages/login/loginController';
@Component({
  templateUrl: 'app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyApp {
  //rootPage:any = LoginController;
  rootPage:any = WelcomePage;
  pages: Array<{title: string, component: any, icon: any}>;  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translateService: TranslateService, 
    assetsServices: AssetsServices) {
    platform.ready().then(() => {
      translateService.addLangs(['FR','EN'])         
        translateService.setDefaultLang('EN');     
      });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      var currLang: string = assetsServices.getCurrentLanguage();
      this.pages = [
        { title: currLang === "en" ? 'HOME' : 'ACCUEIL', component: {}, icon:'home' },
        { title: currLang === "en" ? 'MY ORDERS' : 'MES COMMANDES', component: {}, icon:'cart' },
        { title: currLang === "en" ? 'TRIP' : 'SORTIE', component: {}, icon:'flag' },
        { title: currLang === "en" ? 'PROFIL' : 'PROFIL', component: {}, icon:'contact' },
        { title: currLang === "en" ? 'SETTINGS' : 'PARAMÈTRES', component: {}, icon:'options' },
        { title: currLang === "en" ? 'ABOUT US' : 'À PROPOS DE NOUS', component: {}, icon:'help-circle' },
        { title: currLang === "en" ? 'LOGOUT' : 'DECONNEXION', component: {}, icon:'log-out' }
      ];

    });
  }
}

