import { DOCUMENT } from '@angular/common';
import { Component, Inject, HostListener, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  GeneralInformationService,
  IGeneralInformationItem,
} from 'src/app/services/general-information.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'esn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  windowScrolled: boolean;
  desktop: boolean = false;
  timestamp: string = environment.timeStamp;

  generalInformation: IGeneralInformationItem | undefined = { } as IGeneralInformationItem;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private generalInformationService: GeneralInformationService
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

  async ngOnInit() {
    this.generalInformation = await firstValueFrom(
      this.generalInformationService.fetchGeneralInformation()
    );
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
