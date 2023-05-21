import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AboutComponent } from './pods/about/about.component';
import { HomeComponent } from './pods/home/home.component';
import { LoginComponent } from './pods/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'pages',
    loadChildren: () => import('./pods/pods.module').then((m) => m.PodsModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
