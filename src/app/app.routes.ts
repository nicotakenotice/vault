import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { VaultComponent } from './routes/vault/vault.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':owner',
    component: VaultComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
