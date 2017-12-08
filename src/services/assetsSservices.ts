import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { Monuments } from '../models/monument';

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

  mockListDestinations(): Array<Monuments>{
    return [new Monuments("Eiffel","tower",false, "http://www.seangold.com/img/s11/v32/p1821279834-6.jpg"),
            new Monuments("Opera","Garnier",false, "https://3.bp.blogspot.com/-P6QuTd07yeQ/WeRbYAbM4OI/AAAAAAAAF9g/-9woYBVaKZgOm-NB3efGhA094UywRH2LgCLcBGAs/s640/palais-garnier-opera-de-paris_1220340.jpg"),
            new Monuments("Orsay","Museum",false, "http://i.telegraph.co.uk/multimedia/archive/02465/musee_2465383b.jpg"),
            new Monuments("Sacré","Cœur",false, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Le_sacre_coeur_%28paris_-_france%29.jpg/1200px-Le_sacre_coeur_%28paris_-_france%29.jpg"),
            new Monuments("Louvre","Museum",false, "https://media.10thingstosee.com/photos/louvre-102840_Lq29DD1.jpg.1000x580_q70_crop_upscale.jpg"),
            new Monuments("Notre-","Dame",false, "https://www.lightzoomlumiere.fr/wp-content/uploads/2017/10/Au-parvis-de-l-inconnu-Notre-Dame-de-Paris-Directeur-artistique-Bruno-Seillier-creation-2011-Images-Spectaculaires-Copyright-Jean-Marc-Charles-1200x1807.jpg"),
            new Monuments("Champs-","Élysées",false, "https://d12dkjq56sjcos.cloudfront.net/pub/media/wysiwyg/paris/6-route-detail/View-Of-Paris-Champs-Elysees-With-Arc-De-Triomphe-Big-Bus-Tours-Jan-2017.jpg"),
            new Monuments("Invalides","",false, "https://www.sortiraparis.com/images/400/57915/282582-exposition-et-1917-devient-revolution-aux-invalides.jpg"),
            new Monuments("Saint","Michel",false, "https://www.parisinfo.com/var/otcp/sites/images/media/1.-photos/node_230/fontaine-saint-michel-quartier-od%C3%A9on-saint-michel-%7C-%C2%A9-otcp-am%C3%A9lie-dupont-%7C-176-47/10876934-1-fre-FR/Fontaine-Saint-Michel-Quartier-Od%C3%A9on-Saint-Michel-%7C-%C2%A9-OTCP-Am%C3%A9lie-Dupont-%7C-176-47.jpg"),
            new Monuments("Place","Concorde",false, "https://www.oh-i-see.com/blog/wp-content/uploads/2014/03/187986373sized.jpg")];
  }
}