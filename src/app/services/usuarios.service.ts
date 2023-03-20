import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listUsuarios: Usuario[] = [
    {"usuario": "eGodoy", "nombre": "Ezequiel", "apellido": "Godoy", "sexo": "M"},
    {"usuario": "iClark", "nombre": "Inti", "apellido": "Clark", "sexo": "F"},
    {"usuario": "sIadanza", "nombre": "Silvana", "apellido": "Iadanza", "sexo": "F"},
    {"usuario": "lGodoy", "nombre": "Lucila", "apellido": "Godoy", "sexo": "F"},
    {"usuario": "mTarasco", "nombre": "Milagros", "apellido": "Tarasco", "sexo": "F"}
  ]

  constructor(private http: HttpClient) { }

  getUsuarios(): Usuario[] {
    return this.listUsuarios;
    // return this.http.get<Usuario[]>('./assets/data/usuario.json')
  }

  setUsuario(usuario:Usuario) {
    this.listUsuarios.push(usuario)
  }

  deleteUsuario(index: number) {
    this.listUsuarios.splice(index, 1)
  }

}
