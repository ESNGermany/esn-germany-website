import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
  ],
  providers: [],
  exports: [
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
  ],
  declarations: [],
  entryComponents: [],
})
export class SharedModule {}
