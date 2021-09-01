import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { CadastroApiService } from '../services/cadastro-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  public id: Array<any> = [];
  public cadastro = new Cadastro();
  public liveForm: FormGroup | any;

  constructor(
    public CadastroApiService: CadastroApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      nome: [null, [Validators.required]],
      idade: [null, [Validators.required]],
      email: [null, [Validators.required]],
    });

    let params = this.route.params.subscribe((parameter) => {
      this.id = parameter.id;
    });

    this.getNome();
  }

  getNome() {
    this.CadastroApiService.getUmNome(this.id).subscribe((dados) => {
      this.cadastro = dados[0];
      console.log('cadastro', this.cadastro);
    });
  }

  // Funcao para trazer notificações
  notificacoes(msg: string) {
    this.snackBar.open(msg, 'x', { duration: 3000 });
  }

  update(id: any) {
    this.CadastroApiService.updateCliente(id).subscribe(
      (data) => {
        this.notificacoes("Cadastro atualizado")
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
