import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-coc-page',
  templateUrl: './coc-page.component.html',
})
export class CocPageComponent implements OnInit {
  cocItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Code of Conduct - ESN Germany');
  }

  ngOnInit(): void {
    this.getCoCItem();
  }

  private getCoCItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('4').subscribe(
      (cocItem) => (this.cocItem = cocItem)
    );
  }
}
