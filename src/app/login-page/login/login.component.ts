import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from '../model/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logins: Observable<Login[]>;

  constructor(private loginService: LoginService){
    this.logins = this.loginService.Musicalist();
  }

  ngOnInit(): void {
  }



PostMethod() {
  const login: Login = {

    idusuario: 0,
    email: (<HTMLInputElement>document.getElementById('email')).value,
    senha: (<HTMLInputElement>document.getElementById('senha')).value,
    cpf: ''

  };

  console.log(login);
  this.loginService.PostService(login).subscribe(
    (sucesso) => console.log('sucesso'),
    (error) => console.log(error),
    () => console.log
    );

    {alert(login.email)}
}



}
