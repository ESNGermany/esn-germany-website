import { DOCUMENT } from '@angular/common';
import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  Inject,
} from '@angular/core';

@Directive({
  selector: 'g path',
})
export class SectionmapDirective {
  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public northSections: string[] = [
    'ESN Kiel',
    'ESN Braunschweig',
    'ESN Göttingen',
    'ESN LEI Greifswald',
    'ESN Hamburg',
    'ESN Hannover',
    'ESN Hildesheim',
    'ESN LEI Rostock',
    'ESN Lübeck',
  ];
  public eastSections: string[] = [
    'ESN Erasmix Medizin Berlin',
    'ESN TU Dresden <br> ESN HTW Dresden',
    'ESN Frankfurt (Oder)',
    'ESN Halle',
    'ESN Jena',
    'ESN Potsdam',
  ];
  public westSections: string[] = [
    'ESN Bochum',
    'ESN Bonn',
    'ESN Dortmund',
    'ESN Düsseldorf',
    'ESN Koblenz',
    'ESN Köln',
    'ESN Siegen',
    'ESN Witten/Herdecke',
  ];
  public southEastSections: string[] = [
    'ESN Augsburg',
    'ESN Bayreuth',
    'ESN AKI-Deggendorf',
    'ESN Ingolstadt',
    'ESN MESA München <br> ESN TUMi München',
  ];
  public southWestSections: string[] = [
    'ESN Darmstadt',
    'ESN Frankfurt (Main)',
    'ESN Freiburg',
    'ESN Heidelberg',
    'ESN Kaiserslautern',
    'ESN AKE Karlsruhe',
    'ESN Konstanz',
    'ESN Landau',
    'ESN Mannheim',
    'ESN Saarbrücken',
    'ESN Stuttgart',
    'ESN Pforzheim',
  ];
  public sections: string[] = this.northSections
    .concat(this.eastSections)
    .concat(this.westSections)
    .concat(this.southEastSections)
    .concat(this.southWestSections);

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.sections.includes(this.el.nativeElement.id)) {
      const box = this.document.getElementById('infobox');
      if (box) {
        box.innerHTML = '<div>' + this.el.nativeElement.id + '</div>';
        box.classList.remove('hidden');
        box.classList.add('block');
      }
    }
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    const box = this.document.getElementById('infobox');
    if (box) {
      box.classList.remove('block');
      box.classList.add('hidden');
    }
  }
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const box = this.document.getElementById('infobox');
    if (box) {
      box.setAttribute(
        'style',
        'top: ' +
          String(event.pageY - box.offsetHeight - 30) +
          'px; left: ' +
          String(event.pageX - box.offsetWidth / 2) +
          'px'
      );
    }
  }
}

@Component({
  selector: 'esn-sectionmap',
  templateUrl: './sectionmap.component.html',
  styleUrls: ['./sectionmap.component.scss'],
})
export class SectionmapComponent {
  constructor() {}
}
