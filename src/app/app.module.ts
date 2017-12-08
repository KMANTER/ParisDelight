import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ViewController, NavController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthService } from '../services/authService';
import { AssetsServices } from '../services/assetsSservices';
import { DatePicker } from '@ionic-native/date-picker';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { LoginController } from '../pages/logiin/loginController';
import { RegisterPage } from '../pages/register/registerController';
import { LandingPage } from '../pages/landing/landing';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SignupEmailPage } from '../pages/signup/signup-email';
import { SignupPasswordPage } from '../pages/signup/signup-password';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ProfileCompletePage } from '../pages/signup/profile-complete';

import { ParisDelightHeaderDirective } from '../directives/paris-delight-header/paris-delight-header';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var pages: any[] = [
  HomePage,
  //LoginController,
  RegisterPage,
  LandingPage,

  WelcomePage,
  LoginPage,
  SignupPage,
  SignupEmailPage,
  SignupPasswordPage,
  ForgotPasswordPage,
  ProfileCompletePage
];
var directives: any[] = [
  ParisDelightHeaderDirective
];
@NgModule({
  declarations: [
    MyApp,
    pages,
    directives
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebase)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    pages
  ],
  providers: [
    Storage,    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AssetsServices,
    DatePicker]
})
export class AppModule {}