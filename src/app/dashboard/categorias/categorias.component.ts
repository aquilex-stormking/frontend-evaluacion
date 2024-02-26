import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categorias-service/categoria.service';
import { General } from '../../core/interfaces/general';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export default class CategoriasComponent implements OnInit {
  todaslascategorias: any[] = []; // Inicializa como un array vacío
    constructor(private categoriasService: CategoriaService){

    }    
  ngOnInit(): void {
    this.categorias();
  }
  agregarCategoria(categoria: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', categoria);
  }
  categorias(): void {
    this.categoriasService.getCategorias().subscribe({
      next: (response: any) => { 
        if (response.status) {
          this.todaslascategorias = response.data; 
          // Asigna los datos obtenidos a la variable todaslascategorias
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
  editarCategoria(categoria: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', categoria);
  }
  

  eliminarCategoria(categoria: any): void {
    // Aquí implementa la lógica para eliminar la categoría
    console.log('Eliminar categoría:', categoria);
  }
}
