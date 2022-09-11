import { Routes } from '@angular/router';

export const BLABLA_ROUTES: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./features/blabla')).BlaBlaComponent
    },
    {
        path: 'blub',
        title: 'Blub',
        loadComponent: async () => (await import('./components/blub')).BlubComponent
    }
];
