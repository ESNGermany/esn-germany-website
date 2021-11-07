import { DOCUMENT } from '@angular/common';
import {
  Component,
  Input,
  HostListener,
  OnInit,
  ElementRef,
  Inject,
} from '@angular/core';

@Component({
  selector: 'app-navigation-dark',
  templateUrl: './navigation-dark.component.html',
  styleUrls: ['./navigation-dark.component.scss'],
})
export class NavigationDarkComponent implements OnInit {
  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.hideMenu();
    }
  }

  @Input() activeMenu: string;

  ngOnInit() {}

  showMenu() {
    const burger = this.document.getElementById('burger') as HTMLUListElement;
    const menu = this.document.getElementById('menu') as HTMLUListElement;
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  hideMenu() {
    const burger = this.document.getElementById('burger') as HTMLUListElement;
    const menu = this.document.getElementById('menu') as HTMLUListElement;
    burger.classList.remove('hidden');
    burger.classList.add('vis');
    menu.classList.remove('vis');
    menu.classList.add('hidden');
  }
}
