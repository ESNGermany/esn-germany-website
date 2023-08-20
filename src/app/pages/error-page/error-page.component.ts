import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'esn-error-page',
  templateUrl: './error-page.component.html',
  standalone: true,
  imports: [
    ArticleComponent,
    FooterComponent,
    NavigationComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class ErrorPageComponent {}
