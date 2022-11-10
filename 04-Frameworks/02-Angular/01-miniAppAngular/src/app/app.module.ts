import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PodsModule } from './pods/pods.module';


@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PodsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
