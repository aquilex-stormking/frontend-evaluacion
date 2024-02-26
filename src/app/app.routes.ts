import { Routes } from '@angular/router';


export const routes: Routes = [ { 

    path:'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
        {
        path: 'categorias',
        title: 'Categorias',
        loadComponent: () => import('./dashboard/categorias/categorias.component'),
        },
        {
            path: 'productos',
            title: 'Productos',
            loadComponent: () => import('./dashboard/productos/productos.component'),
        },
        {
            path: 'usuarios',
            title: 'Usuarios',
            loadComponent: () => import('./dashboard/usuarios/usuarios.component'),
        },
        {
            path: 'subcategorias',
            title: 'Subcategorias',
            loadComponent: () => import('./dashboard/subcategorias/subcategorias.component'),
        },
        {
            path: 'productossubcategorias',
            title: 'Productossubcategorias',
            loadComponent: () => import('./dashboard/productossubcategorias/productossubcategorias.component'),
        }
        // aqui se colocan los otros modulos
    ]

    
},
{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
},
{
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
}
 ];
