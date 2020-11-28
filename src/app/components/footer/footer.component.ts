import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  windowScrolled: boolean;
  desktop: boolean = false;
  constructor() {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.screenX);
    // console.log(this.desktop);
    if (window.screenX >= 1024) {
      // console.log(window.screenX);
      this.desktop = true;
      // console.log(this.desktop);
    }
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 80
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  ngOnInit(): void {
    // if (window.screen.width >= 1024) {
    //   this.desktop = true;
    //   console.log(this.desktop);
    // }
  }
}
