import { Component } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-search-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatListModule,
  ],
  templateUrl: './search-dialog.component.html',
  styleUrl: './search-dialog.component.scss',
})
export class SearchDialogComponent {
  options: string[] = ['One', 'Two', 'Three'];
}
