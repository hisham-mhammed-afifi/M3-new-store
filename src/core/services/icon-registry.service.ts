import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private appIcons = ['arabic-flag', 'english-flag'];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  registerAppIcons() {
    this.appIcons.forEach((name) => {
      this.matIconRegistry.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `assets/icons/${name}.svg`
        )
      );
    });
  }
}
