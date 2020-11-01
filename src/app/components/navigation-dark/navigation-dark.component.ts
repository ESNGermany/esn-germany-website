import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navigation-dark',
  templateUrl: './navigation-dark.component.html',
  styleUrls: ['./navigation-dark.component.scss'],
})
export class NavigationDarkComponent implements OnInit {
  constructor() {}

  @Input() activeMenu: string;

  ngOnInit() {
    if (this.activeMenu) {
      var id = this.activeMenu + '-button';
      var activeLink = <HTMLButtonElement>document.getElementById(id);
      activeLink.classList.add('addhoverActive');
    }
  }

  showMenu() {
    var burger = <HTMLUListElement>document.getElementById('burger');
    var menu = <HTMLUListElement>document.getElementById('menu');
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  hideMenu() {}
}
