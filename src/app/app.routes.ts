import { Routes } from '@angular/router';
import { SettingsComponent } from './routes/settings/settings.component';
import { StatsComponent } from './routes/stats/stats.component';
import { TabsComponent } from './routes/tabs/tabs.component';
import { VaultItemComponent } from './routes/vault/vault-item/vault-item.component';
import { VaultComponent } from './routes/vault/vault.component';

const STARTING_ROUTE = '/tabs/tab1';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      // Tab 1
      { path: 'tab1', component: VaultComponent },
      { path: 'tab1/:itemId', component: VaultItemComponent },
      // Tab 2
      { path: 'tab2', component: StatsComponent },
      // Tab 3
      { path: 'tab3', component: SettingsComponent },
      // Default
      {
        path: '',
        redirectTo: STARTING_ROUTE,
        pathMatch: 'full'
      }
    ]
  },
  { path: '', redirectTo: STARTING_ROUTE, pathMatch: 'full' },
  { path: '**', redirectTo: STARTING_ROUTE }
];
