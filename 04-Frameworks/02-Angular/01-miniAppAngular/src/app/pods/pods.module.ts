import { NgModule } from '@angular/core';

import { PodsRoutingModule } from './pods.routing';

import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages/pages.component';




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
  // exports: [
  //   AboutComponent,
  //   CrudComponent,
  //   DashboardComponent,
  //   GalleryComponent,
  //   HomeComponent,
  //   LoginComponent,
  //   ProfileComponent,
  //   PagesComponent,
  //   PodsRoutingModule
  // ],
  imports: [
    PodsRoutingModule
  ],
  providers: [],
})
export class PodsModule { }
