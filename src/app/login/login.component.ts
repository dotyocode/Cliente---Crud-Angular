import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroApiService } from '../services/cadastro-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public transicao: boolean = true;
  public liveForm: FormGroup | any;

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router, private fb: FormBuilder, public cadastroApi: CadastroApiService,) { }

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  fazendoLogin(){
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario)
  }


  notificacoes(msg: string) {
    this.snackBar.open(msg, 'x', { duration: 3000 });
  }

  cadastrarUsuario(){
    //this.router.navigate(['/novoCadastro']);
    if(this.transicao = false) {
      const forms = (<HTMLInputElement>document.getElementById('form'));
      forms.classList.toggle('hide')
    }

  }

  cadastroLogin(){

    if ((<HTMLInputElement>document.getElementById('nome')).value == '') {
      this.notificacoes('Verifique o usuario');
    } else if (
      (<HTMLInputElement>document.getElementById('email')).value == ''
    ) {
      this.notificacoes('Email não informado');
    } else if (
      (<HTMLInputElement>document.getElementById('senha')).value == ''
    ) {
      this.notificacoes('Senha Obrigatoria');
    }

    this.cadastroApi.addLogin(this.liveForm.value).subscribe((data) => {
      this.notificacoes('Usuario Cadastrado com Sucesso!');
    }, (erro) => {
      if(erro.status === 400){
        this.notificacoes('Email já cadastrado');
        const el = (<HTMLInputElement>document.getElementById('labelEmail'));
        el.style.color = "red"
        const el2 = (<HTMLInputElement>document.getElementById('email'));
        el2.style.color = "red"
      }
    })
  }

   voltar() {
    this.transicao = true;
   }

}
