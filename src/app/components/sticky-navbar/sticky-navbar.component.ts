import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-sticky-navbar',
  templateUrl: './sticky-navbar.component.html',
  styleUrls: ['./sticky-navbar.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
  ],
})
export class StickyNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showMenu(): void {
    var burger = <HTMLUListElement>document.getElementById('burger');
    var menu = <HTMLUListElement>document.getElementById('menu');
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }
  hideMenu(burgerHide: boolean): void {
    const burger = document.getElementById('burger') as HTMLUListElement;
    const menu = document.getElementById('menu') as HTMLUListElement;
    burger.classList.remove('hidden');
    if (burgerHide) {
      burger.classList.add('vis');
    }
    menu.classList.remove('vis');
    menu.classList.add('hidden');
  }
}
