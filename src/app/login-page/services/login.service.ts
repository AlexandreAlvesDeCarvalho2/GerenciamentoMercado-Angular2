import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}
  private readonly API = 'api';


  PostService(NewRegistro: any){

    window.location.reload()
    console.log(this.API+"/Logar")
    return this.httpClient.post(this.API + "/Logar", NewRegistro).pipe(take(1));

  }


}
