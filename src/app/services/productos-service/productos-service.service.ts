import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../../core/interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  private urlget = "http://localhost:80/evaluacion/web/api/productos/list-productos";
  private urlpost = "http://localhost:80/evaluacion/web/api/productos/create-productos";
  private urlupdate = "http://localhost:80/evaluacion/web/api/productos/update-productos?id=";
  private urldelete = "http://localhost:80/evaluacion/web/api/productos/delete-productos?id=";
  constructor(private http: HttpClient) { }

  // Obtener categorías
  public getproductos(): Observable<General> {
    return this.http.get<General>(this.urlget, { headers: this.httpHeaders });
  }

  // Actualizar una categoría
  public actualizarProductos(id: number, productos: any): Observable<any> {
    const url = `${this.urlupdate}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.post(url, productos, { headers: this.httpHeaders });
  }

  // Crear una nueva categoría
  public crearProductos(productos: any): Observable<any> {
    return this.http.post(this.urlpost, productos, { headers: this.httpHeaders });
  }

  // Eliminar una categoría
  public eliminarProductos(id: number): Observable<any> {
    const url = `${this.urldelete}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.delete(url, { headers: this.httpHeaders });
  }
}
