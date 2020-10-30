import { Component, Input, OnInit } from '@angular/core';

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
}
