import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../../core/interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class ProductossubcategoriasService {

  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json'
  });

  private urlget = "http://localhost:80/evaluacion/web/api/productos-subcategorias/list-productossubcategorias";
  private urlpost = "http://localhost:80/evaluacion/web/api/productos-subcategorias/list-productossubcategorias";
  private urlupdate = "http://localhost:80/evaluacion/web/api/productos-subcategorias/list-productossubcategorias?id=";
  private urldelete = "http://localhost:80/evaluacion/web/api/productos-subcategorias/list-productossubcategorias?id=";
  constructor(private http: HttpClient) { }

  // Obtener categorías
  public getProductossubcategorias(): Observable<General> {
    return this.http.get<General>(this.urlget, { headers: this.httpHeaders });
  }

  // Actualizar una categoría
  public actualizarProductossubcategorias(id: number, productossubcategorias: any): Observable<any> {
    const url = `${this.urlupdate}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.post(url, productossubcategorias, { headers: this.httpHeaders });
  }

  // Crear una nueva categoría
  public crearProductossubcategorias(productossubcategorias: any): Observable<any> {
    return this.http.post(this.urlpost, productossubcategorias, { headers: this.httpHeaders });
  }

  // Eliminar una categoría
  public eliminarProductossubcategorias(id: number): Observable<any> {
    const url = `${this.urldelete}/${id}`; // Suponiendo que la API espera el ID en la URL
    return this.http.delete(url, { headers: this.httpHeaders });
  }
}