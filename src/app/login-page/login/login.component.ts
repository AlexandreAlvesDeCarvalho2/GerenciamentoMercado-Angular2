import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
  }



PostMethod() {
  const NewLogin: Login = {

    idusuario: 0,
    email: (<HTMLInputElement>document.getElementById('email')).value,
    senha: (<HTMLInputElement>document.getElementById('senha')).value,
    cpf: ''

  };

  console.log(NewLogin);
  this.loginService.PostService(NewLogin).subscribe(
    (sucesso) => console.log('sucesso'),
    (error) => console.log(error),
    () => console.log
    );
    {alert("test")}
}



}
