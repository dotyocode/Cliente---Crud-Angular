import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CadastroApiService } from '../services/cadastro-api.service';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioAutenticado: boolean = false;
  //mostrar ou não o Menu
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private snackBar: MatSnackBar, public apiService: CadastroApiService) {}

  fazerLogin(usuario: Usuario) {

    this.apiService.getLogin(usuario).subscribe((data) => {

      localStorage.setItem("token", data.token)
      this.usuarioAutenticado = true;
      this.router.navigate(['/home']);
    }, (err) => {
      if(err.status === 400) {
        this.notificacoes('Login Invalido');
      }
    })
  }

  usuarioEstaAutenticado(): any{
    if(localStorage.getItem("token")){
      this.mostrarMenuEmitter.emit(true);
      return this.usuarioAutenticado = true;
    }else{
      this.usuarioAutenticado = false
    }
  }

  notificacoes(msg: string) {
    this.snackBar.open(msg, 'x', { duration: 3000 });
  }
}
