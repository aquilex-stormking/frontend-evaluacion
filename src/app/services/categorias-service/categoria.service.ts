import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../../core/interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  private urlget = "http://localhost:80/evaluacion/web/api/categorias/list-categorias";
  private urlpost = "http://localhost:80/evaluacion/web/api/categorias/create-categorias";
  private urlupdate = "http://localhost:80/evaluacion/web/api/categorias/update-categorias?id=";
  private urldelete = "http://localhost:80/evaluacion/web/api/categorias/delete-categorias?id=";
  constructor(private http: HttpClient) { }

  // Obtener categorías
  public getCategorias(): Observable<General> {
    return this.http.get<General>(this.urlget, { headers: this.httpHeaders });
  }

  // Actualizar una categoría
  public actualizarCategoria(id: number, categoria: any): Observable<any> {
    const url = `${this.urlupdate}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.post(url, categoria, { headers: this.httpHeaders });
  }

  // Crear una nueva categoría
  public crearCategoria(categoria: any): Observable<any> {
    return this.http.post(this.urlpost, categoria, { headers: this.httpHeaders });
  }

  // Eliminar una categoría
  public eliminarCategoria(id: number): Observable<any> {
    const url = `${this.urldelete}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.delete(url, { headers: this.httpHeaders });
  }
}