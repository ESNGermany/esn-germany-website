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
    this.title.setTitle('Event Policy Paper - ESN Germany e.V.');
    this.getEppItem();
  }

  getEppItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('3').subscribe(
      (eppItem) => (this.eppItem = eppItem)
    );
  }
}
