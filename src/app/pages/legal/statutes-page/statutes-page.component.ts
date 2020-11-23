import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LegalDocumentsService } from 'src/app/services/legal-documents.service';

interface LegalDocumentsItem {
  id: string;
  UpdateDate: string;
  MarkdownText: string;
  Title: string;
}

@Component({
  selector: 'app-statutes-page',
  templateUrl: './statutes-page.component.html',
  styleUrls: ['./statutes-page.component.scss'],
})
export class StatutesPageComponent implements OnInit {
  statutesItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Statutes - ESN Germany');
    this.getStatutesItem();
  }

  getStatutesItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('1').subscribe(
      (statutesItem) => (this.statutesItem = statutesItem)
    );
  }
}
