import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ArticleComponent } from '../../components/article/article.component';
import { NavigationDarkComponent } from '../../components/navigation-dark/navigation-dark.component';

@Component({
  selector: 'esn-sections-page',
  templateUrl: './sections-page.component.html',
  standalone: true,
  imports: [
    NavigationDarkComponent,
    ArticleComponent,
    RouterLink,
    RouterLinkActive,
    FooterComponent,
  ],
})
export class SectionsPageComponent {}
