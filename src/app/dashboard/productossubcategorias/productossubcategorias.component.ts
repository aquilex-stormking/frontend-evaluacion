import { Component, OnInit } from '@angular/core';
import { ProductossubcategoriasService } from '../../services/productossubcategorias-service/productossubcategorias.service';
import { General } from '../../core/interfaces/general';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-productossubcategoriass',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './productossubcategorias.component.html',
  styleUrl: './productossubcategorias.component.css'
})

export default class ProductossubcategoriasComponent implements OnInit {
  todaslasproductossubcategoriass: any[] = []; // Inicializa como un array vacío
    constructor(private productossubcategoriasService: ProductossubcategoriasService){

    }    
  ngOnInit(): void {
    this.productossubcategoriass();
  }
  agregarProductossubcategorias(productossubcategorias: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', productossubcategorias);
  }
  productossubcategoriass(): void {
    this.productossubcategoriasService.getProductossubcategorias().subscribe({
      next: (response: any) => { 
        if (response.status) {
          this.todaslasproductossubcategoriass = response.data; 
          // Asigna los datos obtenidos a la variable todaslasproductossubcategoriass
        } else {
          console.error('Error: No se pudo obtener la lista de categorías');
        }
      },
      error: (e) => {
        console.log(e);
        console.error('Error: No se pudo obtener la lista de categorías');
      }
    })
    
  }
  editarProductossubcategorias(productossubcategorias: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', productossubcategorias);
  }
  

  eliminarProductossubcategorias(productossubcategorias: any): void {
    // Aquí implementa la lógica para eliminar la categoría
    console.log('Eliminar categoría:', productossubcategorias);
  }
}
