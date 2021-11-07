import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-ordnung-page',
  templateUrl: './ordnung-page.component.html',
  styleUrls: ['./ordnung-page.component.scss'],
})
export class OrdnungPageComponent implements OnInit {
  ordnungItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Ordnung - ESN Germany');
    this.getOrdnungItem();
  }
  getOrdnungItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('2').subscribe(
      (ordnungItem) => (this.ordnungItem = ordnungItem)
    );
  }
}
