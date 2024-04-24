import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

export const routes: Routes = [
  {
    path: ':Category',
    component: CategoryComponent,
    pathMatch: 'full',
  },
];
