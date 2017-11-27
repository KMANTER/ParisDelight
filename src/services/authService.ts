import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';

export class constAuth{
  public static url: string = "http://localhost:1337/parse/classes";
}

@Injectable()
export class AuthService {
  currentUser: User;
  headers: Headers = new Headers();
  constructor(public http: Http){
    this.headers.append("Content-Type","application/json");
    this.headers.append("X-Parse-Application-Id","myAppId");
  }
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User();
        this.currentUser.email = "saimon@devdactic.com";
        this.currentUser.username = "Simon";
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.username === null) {
      return Observable.throw("Please insert credentials");
    } else {
      var repData;
      var link: string = constAuth.url + "/User"; 
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        this.http.post(link, JSON.stringify(credentials), {headers: this.headers}).subscribe(data => {
          repData = data;
          observer.next(true);          
        }, error => {
            console.log("Oooops!");
        }); 
        observer.complete();        
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}