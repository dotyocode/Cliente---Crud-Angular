import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cadastro } from '../cadastro';
import { map, tap } from 'rxjs/operators';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root',
})
export class CadastroApiService {
  public cadastro: any;
  //API
  public API_URL: string = 'http://localhost:3333/';
  public API_URL_POST: string = 'http://localhost:3333/registrar';
  private header = new HttpHeaders()

  constructor(public http: HttpClient) {}

  //metodo para pegar os Filmes
  getNome() {

    let headers = new HttpHeaders({
      "Content-Type":  "application/json",
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}` ,
    });
    let httpOptions = {
        headers: headers
    };

    return this.http.get<any>(`${this.API_URL}`, httpOptions);
  }

  getUmNome(id: any) {
    let headers = new HttpHeaders({
      "Content-Type":  "application/json",
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}` ,
    });

    let httpOptions = {
        headers: headers
    };

    return this.http.get<any>(`${this.API_URL}nome/${id}`, httpOptions);
  }

  addCliente(cliente: any) {
    console.log(cliente._id);

        let headers = new HttpHeaders({
      "Content-Type":  "application/json",
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}` ,
    });

    let httpOptions = {
        headers: headers
    };


    return this.http.post(`${this.API_URL}registrar`, cliente, httpOptions);
  }

  delCliente(id: any): Observable<any> {

    let headers = new HttpHeaders({
      "Content-Type":  "application/json",
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}` ,
    });

    let httpOptions = {
        headers: headers
    };


    const _url = `${this.API_URL}deletar/` + id;
    return this.http.get(_url, httpOptions);
  }

  updateCliente(cadastro1: Cadastro): Observable<any> {


    let headers = new HttpHeaders({
      "Content-Type":  "application/json",
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}` ,
    });

    let httpOptions = {
        headers: headers
    };


    return this.http.put<Cadastro>(
      `${this.API_URL}editar/${cadastro1._id}`,
      cadastro1, httpOptions
    );
  }


  // login
  getLogin(usuario: any) {
    return this.http.post<any>(`${this.API_URL}login`, usuario);
  }

}
