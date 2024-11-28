import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SectionComponent} from './routes/section/section.component';
import {InventoryComponent} from './routes/inventory/inventory.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inventory'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: ':section',
        component: SectionComponent
      }
    ]
  }
];
