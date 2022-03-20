import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

@Component({
  selector: 'app-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {
    this.title.setTitle('Konsultationsordnung - ESN Germany');
  }

  ngOnInit(): void {
    this.getKonsultationsordnungItem();
  }

  private getKonsultationsordnungItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('5').subscribe(
      (konsultationsordnungItem) =>
        (this.konsultationsordnungItem = konsultationsordnungItem)
    );
  }
}
