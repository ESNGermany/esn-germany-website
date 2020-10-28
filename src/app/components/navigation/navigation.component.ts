import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public showMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }
}
