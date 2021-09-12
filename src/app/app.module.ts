import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EditarComponent } from './editar/editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth-guard.guard';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CadastroComponent,
    EditarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
