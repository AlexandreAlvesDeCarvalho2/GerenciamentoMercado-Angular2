import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { first, take, tap } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}
  private readonly API = 'api';


  PostService(login: any){

    window.location.reload()
    console.log(this.API+"/logar")

    return this.httpClient.post(this.API + "/logar", login).pipe(take(1));

  }

  Musicalist() {
    return this.httpClient.get<Login[]>(this.API + + '/Login').pipe(
      first(),
      tap((logins) => console.log(logins))
    );
  }


}
