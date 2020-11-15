import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';

@NgModule({
  imports: [FlexLayoutServerModule, AppModule, ServerModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
