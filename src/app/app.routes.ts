import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: async () => (await import('./home/features/home')).HomeComponent
    },
    {
        path: 'blabla',
        title: 'Bla Bla',
        loadChildren: async () => (await import('./blabla/blabla.routes')).BLABLA_ROUTES
    },
    {
        path: 'pokemon',
        title: 'Pokémon',
        loadChildren: async () => (await import('./pokemon/pokemon.routes')).POKEMON_ROUTES
    },
    {
        path: 'charts',
        title: 'Charts',
        loadChildren: async () => (await import('./charts/charts.routes')).CHARTS_ROUTES
    },
    {
        path: 'settings',
        title: 'Settings',
        loadComponent: async () => (await import('./settings/feature/settings')).SettingsComponent
    },
    {
        path: '**',
        title: '404',
        loadComponent: async () => (await import('./shared/components/not-found/not-found.component')).NotFoundComponent
    }
];
