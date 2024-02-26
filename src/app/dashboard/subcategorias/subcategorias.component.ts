import { Component, OnInit } from '@angular/core';
import { SubcategoriaService } from '../../services/subcategorias-service/subcategoria.service';
import { General } from '../../core/interfaces/general';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-subcategorias',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './subcategorias.component.html',
  styleUrl: './subcategorias.component.css'
})

export default class SubcategoriasComponent implements OnInit {
  todaslassubcategorias: any[] = []; // Inicializa como un array vacío
    constructor(private subcategoriasService: SubcategoriaService){
      
    }    
    agregarSubcategoria(): void {
      // Aquí implementa la lógica para editar la categoría
      console.log('Editar categoría:', "");
    }
    ngOnInit(): void {
    this.subcategorias();
  }
  subcategorias(): void {
    this.subcategoriasService.getSubcategorias().subscribe({
      next: (response: any) => { 
        if (response.status) {
          this.todaslassubcategorias = response.data; 
          // Asigna los datos obtenidos a la variable todaslassubcategorias
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
  editarSubCategoria(subcategoria: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', subcategoria);
  }
  

  eliminarSubCategoria(subcategoria: any): void {
    // Aquí implementa la lógica para eliminar la categoría
    console.log('Eliminar categoría:', subcategoria);
  }
}
