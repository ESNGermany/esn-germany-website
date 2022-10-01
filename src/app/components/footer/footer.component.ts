import { DOCUMENT } from '@angular/common';
import { Component, Inject, HostListener } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  windowScrolled: boolean;
  desktop: boolean = false;
  timestamp: string = environment.timeStamp;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.screenX >= 1267) {
      this.desktop = true;
    }
    if (
      window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  public scrollToTop(): void {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
