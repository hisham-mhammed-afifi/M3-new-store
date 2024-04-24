import { Component, HostListener, Inject, inject, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IconRegistryService, KeyboardShortcutService } from '@core';
import { SearchDialogComponent } from './search-dialog/search-dialog.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // ---------------

    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatListModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new-store';

  iconService = inject(IconRegistryService);

  links = [
    {
      label: 'Saved',
      path: '/saved',
    },
    {
      label: "Today's Deals",
      path: '/',
    },
    {
      label: 'Electronics',
      path: '/asd',
    },
    {
      label: 'Motors',
      path: '/asd',
    },
    {
      label: 'Fashion',
      path: '/asd',
    },
    {
      label: 'Health & Beauty',
      path: '/asd',
    },
    {
      label: 'Home & Garden',
      path: '/qwe',
    },
  ];

  isDark = signal(this.document.body.classList.contains('dark'));

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      // TODO: need to check if the dialog NOT opened before
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        this.openSearchDialog();
      }
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private keyboardShortcutService: KeyboardShortcutService,
    public dialog: MatDialog
  ) {
    this.iconService.registerAppIcons();
    // this.keyboardShortcutService.search$.subscribe((open) => {
    //   if (open) {
    //   }
    // });
  }

  openSearchDialog() {
    this.dialog.open(SearchDialogComponent, {
      minWidth: '320px',
      width: '80vw',
      maxWidth: '1200px',
      hasBackdrop: true,
    });
  }

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
