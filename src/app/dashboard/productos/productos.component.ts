import { Component, OnInit } from '@angular/core';
import { ProductosServiceService } from '../../services/productos-service/productos-service.service';
import { General } from '../../core/interfaces/general';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export default class ProductosComponent implements OnInit {
  todaslasproductos: any[] = []; // Inicializa como un array vacío
  constructor(private productosService: ProductosServiceService){

  }    
  ngOnInit(): void {
    this.productos();
  }
  agregarCategoria(categoria: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', categoria);
  }
  productos(): void {
    this.productosService.getproductos().subscribe({
      next: (response: any) => { 
        if (response.status) {
          this.todaslasproductos = response.data; 
          // Asigna los datos obtenidos a la variable todaslasproductos
        } else {
          console.error('Error: No se pudo obtener la lista de productos');
        }
      },
      error: (e) => {
        console.log(e);
        console.error('Error: No se pudo obtener la lista de productos');
      }
    })
    
  }
  editarProducto(categoria: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', categoria);
  }


  eliminarProducto(categoria: any): void {
    // Aquí implementa la lógica para eliminar la categoría
    console.log('Eliminar categoría:', categoria);
  }
  

}
