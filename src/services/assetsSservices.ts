import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AssetsServices {
  previousPage : any;
  constructor(public translateService: TranslateService){
    
  }
  getCurrentLanguage(){
    return this.translateService.getDefaultLang();      
  }
  getListLanguage(){
    return this.translateService.getLangs();
  }
  setCurrentLanguage(lang: string){
    this.translateService.use(lang);  
    this.translateService.setDefaultLang(lang);     
  }
  setPreviousPage(current){
    this.previousPage = current;
  }
  getPreviousPage(): any{
    return this.previousPage;
  }
}