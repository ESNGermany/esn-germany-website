import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-epp-page',
  templateUrl: './epp-page.component.html',
})
export class EppPageComponent implements OnInit {
  eppItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Event Policy Paper - ESN Germany');
  }

  ngOnInit(): void {
    this.getEppItem();
  }

  private getEppItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('3').subscribe(
      (eppItem) => (this.eppItem = eppItem)
    );
  }
}
