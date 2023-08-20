import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'esn-sections-page',
  templateUrl: './sections-page.component.html',
  standalone: true,
  imports: [
    NavigationComponent,
    ArticleComponent,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
  ],
})
export class SectionsPageComponent {}
