import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-statutes-page',
  templateUrl: './statutes-page.component.html',
})
export class StatutesPageComponent implements OnInit {
  statutesItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Statutes - ESN Germany');
  }

  ngOnInit(): void {
    this.getStatutesItem();
  }

  private getStatutesItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('1').subscribe(
      (statutesItem) => (this.statutesItem = statutesItem)
    );
  }
}
