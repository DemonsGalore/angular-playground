import { Routes } from '@angular/router';

export const CHARTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./features/charts')).ChartsComponent
    }
];
