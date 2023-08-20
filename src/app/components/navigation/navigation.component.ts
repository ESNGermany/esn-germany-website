import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SectionmapDirective } from '../sectionmap/sectionmap.component';

@Component({
  selector: 'esn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, SectionmapDirective, RouterLink, RouterLinkActive],
})
export class NavigationComponent {
  @Input() activeMenu: string;
  @Input() isLandingPage = false;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.hideMenu();
    }
  }

  public showMenu(): void {
    const burger = this.document.getElementById('burger') as HTMLUListElement;
    const menu = this.document.getElementById('menu') as HTMLUListElement;
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  public hideMenu(): void {
    const burger = this.document.getElementById('burger') as HTMLUListElement;
    const menu = this.document.getElementById('menu') as HTMLUListElement;
    burger.classList.remove('hidden');
    burger.classList.add('vis');
    menu.classList.remove('vis');
    menu.classList.add('hidden');
  }
}
