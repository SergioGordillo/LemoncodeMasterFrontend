import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

import { PagesComponent } from './pages/pages.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'pages', component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'crud', component: CrudComponent },
      { path: 'profile', component: ProfileComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
