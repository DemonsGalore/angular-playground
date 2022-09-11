import { Routes } from '@angular/router';

export const POKEMON_ROUTES: Routes = [
    {
        path: '',
        loadComponent: async () => (await import('./features/pokemon')).PokemonComponent
    },
    {
        path: ':name',
        loadComponent: async () => (await import('./features/pokemon')).PokemonComponent
    }
];
