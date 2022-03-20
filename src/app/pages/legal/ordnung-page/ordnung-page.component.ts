import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-ordnung-page',
  templateUrl: './ordnung-page.component.html',
})
export class OrdnungPageComponent implements OnInit {
  ordnungItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Ordnung - ESN Germany');
  }

  ngOnInit(): void {
    this.getOrdnungItem();
  }

  private getOrdnungItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('2').subscribe(
      (ordnungItem) => (this.ordnungItem = ordnungItem)
    );
  }
}
