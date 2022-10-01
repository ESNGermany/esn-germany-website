import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, shareReplay } from 'rxjs';
import { ImprintItem, ImprintService } from 'src/app/services/imprint.service';

@Component({
  selector: 'app-imprint-page',
  templateUrl: './imprint-page.component.html',
  styleUrls: ['./../../../styles.scss'],
})
export class ImprintPageComponent implements OnInit {
  imprintItem$: Observable<ImprintItem[]> | undefined;

  constructor(private title: Title, private imprintService: ImprintService) {
    this.title.setTitle('Imprint - ESN Germany');
  }

  async ngOnInit() {
    this.imprintItem$ = this.imprintService
      .fetchImprintList()
      .pipe(shareReplay(1));
  }
}
