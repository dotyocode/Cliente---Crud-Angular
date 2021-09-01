import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { CadastroApiService } from '../services/cadastro-api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public mostrarMenu: boolean = false;

  constructor(private authService: AuthService,public  apiService: CadastroApiService, private router: Router) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.mostrarMenu = false
  }

}
