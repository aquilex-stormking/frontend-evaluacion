import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../../core/interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {

  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  private urlget = "http://localhost:80/evaluacion/web/api/subcategorias/list-subcategorias";
  private urlpost = "http://localhost:80/evaluacion/web/api/subcategorias/create-subcategorias";
  private urlupdate = "http://localhost:80/evaluacion/web/api/subcategorias/update-subcategorias?id=";
  private urldelete = "http://localhost:80/evaluacion/web/api/subcategorias/delete-subcategorias?id=";
  constructor(private http: HttpClient) { }

  // Obtener categorías
  public getSubcategorias(): Observable<General> {
    return this.http.get<General>(this.urlget, { headers: this.httpHeaders });
  }

  // Actualizar una categoría
  public actualizarSubcategoria(id: number, subcategoria: any): Observable<any> {
    const url = `${this.urlupdate}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.post(url, subcategoria, { headers: this.httpHeaders });
  }

  // Crear una nueva categoría
  public crearSubcategoria(subcategoria: any): Observable<any> {
    return this.http.post(this.urlpost, subcategoria, { headers: this.httpHeaders });
  }

  // Eliminar una categoría
  public eliminarSubcategoria(id: number): Observable<any> {
    const url = `${this.urldelete}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.delete(url, { headers: this.httpHeaders });
  }
}