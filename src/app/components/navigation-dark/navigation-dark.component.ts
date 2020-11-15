import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-dark',
  templateUrl: './navigation-dark.component.html',
  styleUrls: ['./navigation-dark.component.scss'],
})
export class NavigationDarkComponent implements OnInit {
  constructor() {}

  @Input() activeMenu: string;

  ngOnInit() {}

  showMenu() {
    const burger = document.getElementById('burger') as HTMLUListElement;
    const menu = document.getElementById('menu') as HTMLUListElement;
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  hideMenu() {}
}
