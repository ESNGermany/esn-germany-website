import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  LegalDocumentsItem,
  LegalDocumentsService,
} from 'src/app/services/legal-documents.service';

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
    this.title.setTitle('Konsultationsordnung - ESN Germany');
    this.getKonsultationsordnungItem();
  }
  getKonsultationsordnungItem(): void {
    this.LegalDocumentsService.fetchLegalDocumentsList('5').subscribe(
      (konsultationsordnungItem) =>
        (this.konsultationsordnungItem = konsultationsordnungItem)
    );
  }
}
