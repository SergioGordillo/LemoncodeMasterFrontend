import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    PrivateHeaderComponent,
    PublicHeaderComponent,
  ],
  exports: [FooterComponent, PrivateHeaderComponent, PublicHeaderComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
})
export class LayoutModule {}
