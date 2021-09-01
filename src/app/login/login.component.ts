import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  fazendoLogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario)
  }


  notificacoes(msg: string) {
    this.snackBar.open(msg, 'x', { duration: 3000 });
  }

}
