import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyboardShortcutService {
  private searchSub = new BehaviorSubject<boolean>(false);
  search$ = this.searchSub.asObservable();

  constructor() {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('ehhhhhhhhhhh', event);
    if (event.ctrlKey || event.metaKey) {
      this.searchSub.next(true);
    }
  }
}
