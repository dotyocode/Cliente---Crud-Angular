import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroApiService } from '../services/cadastro-api.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  public liveForm: FormGroup | any;

  constructor(
    public cadastroApi: CadastroApiService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      nome: [null, Validators.required],
      idade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  onSubmit() {
    console.log('dados do form', this.liveForm);
  }

  static nomeValido(control: FormControl) {
    const nome = control.value;
    if (nome && nome !== '') {
    }
    return null;
  }

  // Funcao para trazer notificações
  notificacoes(msg: string) {
    this.snackBar.open(msg, 'x', { duration: 3000 });
  }

  cadastrar() {

    if ((<HTMLInputElement>document.getElementById('nome')).value == '') {
      this.notificacoes('Verifique o usuario');
    } else if (
      (<HTMLInputElement>document.getElementById('idade')).value == ''
    ) {
      this.notificacoes('Idade não Informada');
    } else if (
      (<HTMLInputElement>document.getElementById('email')).value == ''
    ) {
      this.notificacoes('Email não informado');
    } else if (
      (<HTMLInputElement>document.getElementById('senha')).value == ''
    ) {
      this.notificacoes('Senha Obrigatoria');
    }


    this.cadastroApi.addCliente(this.liveForm.value).subscribe((data) => {
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
}



