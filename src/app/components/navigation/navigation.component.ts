import { DOCUMENT } from '@angular/common';
import { Component, HostListener, ElementRef, Inject } from '@angular/core';
import { SectionmapDirective } from '../sectionmap/sectionmap.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'esn-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        SectionmapDirective,
    ],
})
export class NavigationComponent {
  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (
      !this.el.nativeElement.contains(event.target) &&
      !this.document.getElementById('menu').classList.contains('hidden')
    ) {
      this.hideMenu(false);
      if (screenX > 1172) {
        this.hideMenu(true);
      }
    }
  }

  public showMenu(): void {
    var burger = <HTMLUListElement>this.document.getElementById('burger');
    var menu = <HTMLUListElement>this.document.getElementById('menu');
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
