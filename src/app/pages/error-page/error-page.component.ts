import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./../../../styles.scss'],
})
export class ErrorPageComponent {
  constructor(private title: Title) {
    this.title.setTitle('Oopsie... - ESN Germany');
  }
}
