import { Component, Inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new-store';

  isDark = signal(this.document.body.classList.contains('dark'));

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleTheme() {
    if (this.isDark()) {
      this.document.body.classList.remove('dark');
      this.isDark.set(false);
    } else {
      this.document.body.classList.add('dark');
      this.isDark.set(true);
    }
  }
}
