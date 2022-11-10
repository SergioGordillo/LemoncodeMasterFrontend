import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pods/about/about.component';
import { HomeComponent } from './pods/home/home.component';
import { PagesComponent } from './pods/pages/pages.component';
import { LoginComponent } from './pods/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pages', loadChildren: () => import('./pods/pods.module').then(m => m.PodsModule)},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
