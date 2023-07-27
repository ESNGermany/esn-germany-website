import { Component, Inject } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { SectionmapDirective } from '../sectionmap/sectionmap.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'esn-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SectionmapDirective],
})
export class StickyNavbarComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public showMenu(): void {
    const burger = <HTMLUListElement>this.document.getElementById('burger');
    const menu = <HTMLUListElement>this.document.getElementById('menu');
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }
  public hideMenu(burgerHide: boolean): void {
    const burger = this.document.getElementById('burger') as HTMLUListElement;
    const menu = this.document.getElementById('menu') as HTMLUListElement;
    burger.classList.remove('hidden');
    if (burgerHide) {
      burger.classList.add('vis');
    }
    menu.classList.remove('vis');
    menu.classList.add('hidden');
  }
}
