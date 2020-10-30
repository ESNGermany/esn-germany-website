import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  @Input() activeMenu: string;

  ngOnInit() {}

  showMenu() {
    var burger = <HTMLUListElement>document.getElementById('burger');
    var menu = <HTMLUListElement>document.getElementById('menu');
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  hideMenu() {
    var menu = <HTMLUListElement>document.getElementById('menu');
    menu.classList.add('vis burger');
    var burger = <HTMLUListElement>document.getElementById('burger');
    burger.classList.remove('hidden');
  }
}
