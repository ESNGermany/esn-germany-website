import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  Inject,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
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
      if (screenX > 1024) {
        this.hideMenu(true);
      }
    }
  }

  ngOnInit() {}

  showMenu() {
    var burger = <HTMLUListElement>this.document.getElementById('burger');
    var menu = <HTMLUListElement>this.document.getElementById('menu');
    burger.classList.add('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('vis');
  }

  hideMenu(burgerHide: boolean) {
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
