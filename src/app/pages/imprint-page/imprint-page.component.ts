import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IImprintItem, ImprintService } from 'src/app/services/imprint.service';

@Component({
  selector: 'esn-imprint-page',
  templateUrl: './imprint-page.component.html',
})
export class ImprintPageComponent implements OnInit {
  imprintItem: IImprintItem | undefined;

  constructor(private imprintService: ImprintService) {}

  async ngOnInit() {
    this.imprintItem = await firstValueFrom(
      this.imprintService.fetchImprint()
    ).then((res: any) => res.data);
  }
}
