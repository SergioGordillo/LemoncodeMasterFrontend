import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pods/home/home.component';
import { LoginComponent } from './pods/login/login.component';
import { AboutComponent } from './pods/about/about.component';
import { DashboardComponent } from './pods/dashboard/dashboard.component';
import { GalleryComponent } from './pods/gallery/gallery.component';
import { CrudComponent } from './pods/crud/crud.component';
import { ProfileComponent } from './pods/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
