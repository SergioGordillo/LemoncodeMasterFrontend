import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages/pages.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    CrudComponent,
    DashboardComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    PagesComponent
  ],
  exports: [
    AboutComponent,
    CrudComponent,
    DashboardComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    PagesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
})
export class PodsModule { }
