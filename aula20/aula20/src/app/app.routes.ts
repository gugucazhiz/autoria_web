import { Routes } from '@angular/router';
import { ListProducts } from'./products/list-products/list-products';



export const routes: Routes = [
{
    path: 'produtos',
    loadComponent: () =>
    import('./products/list-products/list-products').then((m) => m.ListProducts),
},
];