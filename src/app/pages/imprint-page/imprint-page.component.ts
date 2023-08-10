import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IImprintItem, ImprintService } from 'src/app/services/imprint.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgIf } from '@angular/common';
import { ArticleComponent } from '../../components/article/article.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'esn-imprint-page',
  templateUrl: './imprint-page.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    NgIf,
    MarkdownModule,
    FooterComponent,
  ],
})
export class ImprintPageComponent implements OnInit {
  imprintItem: IImprintItem | undefined;

  constructor(private imprintService: ImprintService) {}

  async ngOnInit() {
    this.imprintItem = await firstValueFrom(
      this.imprintService.fetchImprint(),
    ).then((res: any) => res.data);
  }
}
