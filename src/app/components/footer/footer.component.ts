import { DOCUMENT, NgIf, NgClass } from '@angular/common';
import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { GeneralInformationService } from 'src/app/services/general-information.service';
import { GeneralInformationItem } from 'src/app/services/general-information-item';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, RouterLinkActive],
})
export class FooterComponent implements OnInit {
  public desktop = false;
  public generalInformation: GeneralInformationItem;
  public timestamp: string = environment.timeStamp;
  private windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private generalInformationService: GeneralInformationService,
  ) {}

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

  ngOnInit(): void {
    this.generalInformationService.getGeneralInformation().subscribe({
      next: (generalInfo?: GeneralInformationItem) => {
        this.generalInformation = generalInfo;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public scrollToTop(): void {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
