import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './editar/editar.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //sempre usar o canActivate para que o usuario precise fazer login para entrar nessa rota
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard] },
  { path: 'editar/:id', component: EditarComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
