import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatDividerModule, MatExpansionModule, MatIconModule],
  providers: [],
  exports: [MatDividerModule, MatExpansionModule, MatIconModule],
  declarations: [],
  entryComponents: [],
})
export class SharedModule {}
