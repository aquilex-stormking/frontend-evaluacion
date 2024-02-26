import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../../core/interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  private urlget = "http://localhost:80/evaluacion/web/api/usuarios/list-usuarios";
  private urlpost = "http://localhost:80/evaluacion/web/api/usuarios/create-usuarios";
  private urlupdate = "http://localhost:80/evaluacion/web/api/usuarios/update-usuarios?id=";
  private urldelete = "http://localhost:80/evaluacion/web/api/usuarios/delete-usuarios?id=";
  constructor(private http: HttpClient) { }

  // Obtener categorías
  public getUsuarios(): Observable<General> {
    return this.http.get<General>(this.urlget, { headers: this.httpHeaders });
  }

  // Actualizar una categoría
  public actualizarUsuario(id: number, usuario: any): Observable<any> {
    const url = `${this.urlupdate}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.post(url, usuario, { headers: this.httpHeaders });
  }

  // Crear una nueva categoría
  public crearUsuario(usuario: any): Observable<any> {
    return this.http.post(this.urlpost, usuario, { headers: this.httpHeaders });
  }

  // Eliminar una categoría
  public eliminarUsuario(id: number): Observable<any> {
    const url = `${this.urldelete}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.delete(url, { headers: this.httpHeaders });
  }
}