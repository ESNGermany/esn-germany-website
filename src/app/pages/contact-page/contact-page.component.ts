import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ArticleComponent } from 'src/app/components/article/article.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';

@Component({
  selector: 'esn-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  standalone: true,
  imports: [
    ArticleComponent,
    FooterComponent,
    NavigationComponent,
    RouterLink,
    RouterLinkActive,
  ],
})
export class ContactPageComponent {}
