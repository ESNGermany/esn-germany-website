import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { NavigationComponent } from 'src/app/components/navigation/navigation.component';
import { LegalDocumentsService } from 'src/app/services/legal-documents.service';
import { LegalDocument } from 'src/app/services/legal-document-item';

@Component({
  selector: 'esn-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
  standalone: true,
  imports: [NavigationComponent, NgIf, MarkdownModule, FooterComponent],
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem: LegalDocument;

  constructor(private legalDocumentsService: LegalDocumentsService) {}

  ngOnInit(): void {
    this.legalDocumentsService
      .getLegalDocument('Konsultationsordnung')
      .subscribe({
        next: (document?: LegalDocument) => {
          this.konsultationsordnungItem = document;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
