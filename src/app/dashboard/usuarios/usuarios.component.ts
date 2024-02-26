import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuarios-service/usuario.service';
import { General } from '../../core/interfaces/general';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export default class usuariosComponent implements OnInit {
  todaslasusuarios: any[] = []; // Inicializa como un array vacío
    constructor(private usuarioService: UsuarioService){

    }    
  ngOnInit(): void {
    this.usuarios();
  }
  agregarusuario(usuario: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', usuario);
  }
  usuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (response: any) => { 
        if (response.status) {
          this.todaslasusuarios = response.data; 
          // Asigna los datos obtenidos a la variable todaslasusuarios
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
  editarusuario(usuario: any): void {
    // Aquí implementa la lógica para editar la categoría
    console.log('Editar categoría:', usuario);
  }
  

  eliminarusuario(usuario: any): void {
    // Aquí implementa la lógica para eliminar la categoría
    console.log('Eliminar categoría:', usuario);
  }
}
