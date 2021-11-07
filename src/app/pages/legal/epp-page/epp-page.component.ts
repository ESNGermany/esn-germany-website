import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-epp-page',
  templateUrl: './epp-page.component.html',
  styleUrls: ['./epp-page.component.scss'],
})
export class EppPageComponent implements OnInit {
  eppItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Event Policy Paper - ESN Germany');
    this.getEppItem();
  }

  getEppItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('3').subscribe(
      (eppItem) => (this.eppItem = eppItem)
    );
  }
}
