import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PodsRoutingModule } from './pods.routing';

import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages/pages.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { AuthServiceModule } from '../auth/auth-service.module';

@NgModule({
  declarations: [
    AboutComponent,
    CrudComponent,
    DashboardComponent,
    GalleryComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    PagesComponent,
  ],
  imports: [
    AuthServiceModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    PodsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class PodsModule {}
