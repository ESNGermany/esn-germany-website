import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
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
