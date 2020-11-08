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
  selector: 'app-coc-page',
  templateUrl: './coc-page.component.html',
  styleUrls: ['./coc-page.component.scss'],
})
export class CocPageComponent implements OnInit {
  cocItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Code of Conduct - ESN Germany e.V.');
    this.getCoCItem();
  }

  getCoCItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('4').subscribe(
      (cocItem) => (this.cocItem = cocItem)
    );
  }
}
