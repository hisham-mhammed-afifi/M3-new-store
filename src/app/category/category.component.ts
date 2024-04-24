import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  category = '';
  route = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe((params) => {
      this.category = params['Category'];
    });
  }
}
