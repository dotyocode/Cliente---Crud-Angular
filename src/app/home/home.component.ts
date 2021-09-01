import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroApiService } from '../services/cadastro-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public nome: any;
  public next: boolean = false;

  constructor(public cadastroService: CadastroApiService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cadastroService.getNome().subscribe((data) => {
      this.nome = data;
      console.log(data);
    });
    this.next = true;
  }

  deletarCadastro(id: any) {
    this.cadastroService.delCliente(id._id).subscribe((res) => {
      console.log('deletei');
      this.notificacoes('Cadastro Deletado');
      this.ngOnInit();
    });
  }

  // Funcao para trazer notificações
  notificacoes(msg: string) {
    this.snackBar.open(msg, 'x', { duration: 3000 });
  }
}
