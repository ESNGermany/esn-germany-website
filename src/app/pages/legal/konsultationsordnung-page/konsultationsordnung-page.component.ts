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
  selector: 'app-konsultationsordnung-page',
  templateUrl: './konsultationsordnung-page.component.html',
  styleUrls: ['./konsultationsordnung-page.component.scss'],
})
export class KonsultationsordnungPageComponent implements OnInit {
  konsultationsordnungItem: LegalDocumentsItem;

  constructor(
    private title: Title,
    private LegalDocumentsService: LegalDocumentsService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Konsultationsordnung - ESN Germany e.V.');
    this.getKonsultationsordnungItem();
  }
  getKonsultationsordnungItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('5').subscribe(
      (konsultationsordnungItem) =>
        (this.konsultationsordnungItem = konsultationsordnungItem)
    );
  }
}
