import { DOCUMENT } from '@angular/common';
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
  selector: 'esn-navigation-dark',
  templateUrl: './navigation-dark.component.html',
  styleUrls: ['./navigation-dark.component.scss'],
  standalone: true,
  imports: [SectionmapDirective, RouterLink, RouterLinkActive],
})
export class NavigationDarkComponent {
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

  @Input() activeMenu: string;

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
