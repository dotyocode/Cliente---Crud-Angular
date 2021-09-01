import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //fazendo a verificacao
    //se o usuario estiver autenticado retornará True, então segue em frente
    if(this.authService.usuarioEstaAutenticado()) {
      return true;
    }
    //caso o contrario vai ir para tela de login novamente
    this.router.navigate(['/login']);
    return false;
  }

}
