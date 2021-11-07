import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

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
    this.title.setTitle('Code of Conduct - ESN Germany');
    this.getCoCItem();
  }

  getCoCItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('4').subscribe(
      (cocItem) => (this.cocItem = cocItem)
    );
  }
}
