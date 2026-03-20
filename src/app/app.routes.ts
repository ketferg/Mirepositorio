import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductoInyectores } from './producto-inyectores/producto-inyectores';
import { ProductoCombustion } from './producto-combustion/producto-combustion';
import { Especificaciones } from './especificaciones/especificaciones';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'producto-inyectores', component: ProductoInyectores },
  { path: 'producto-combustion', component: ProductoCombustion },
  { path: 'especificaciones', component: Especificaciones },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
