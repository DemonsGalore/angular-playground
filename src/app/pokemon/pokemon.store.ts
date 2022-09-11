import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { catchError, Observable, switchMap, tap, throwError } from 'rxjs';

import { Pokemon, PokemonResult } from '@pokemon/interfaces';
import { PokemonService } from '@pokemon/services';

export type RequestStatus = 'default' | 'loading' | 'success' | 'error';

interface PokemonState {
    pokemon: PokemonResult[];
    selected: Pokemon | null;
    status: RequestStatus;
}

@Injectable()
export class PokemonStore extends ComponentStore<PokemonState> {
    pokemonService = inject(PokemonService);

    pokemon$ = this.select((state) => state.pokemon);

    selectedPokemon$ = this.select((state) => state.selected);

    selectFirstPokemon$ = this.select((state) => {
        if (state.status === 'success' && state.pokemon.length > 0) {
            return state.pokemon[0];
        }

        return null;
    });

    fetchData = this.effect(($) => {
        return $.pipe(
            tap({
                next: () => this.setState({ pokemon: [], status: 'loading', selected: null })
            }),
            switchMap(() => {
                return this.pokemonService.fetchPokemon().pipe(
                    tap({
                        next: (pokemon) => this.setState({ pokemon, status: 'success', selected: null }),
                        error: (() => this.setState({ pokemon: [], status: 'error', selected: null }))
                    }),
                    catchError((err) => throwError(() => new Error(err)))
                );
            })
        )
    });

    fetchPokemonByName = this.effect((name$: Observable<string>) => {
        return name$.pipe(
            switchMap((name) => {
                return this.pokemonService.fetchPokemonByName(name).pipe(
                    tap((pokemon) => {
                        this.selectPokemon(pokemon);
                    }),
                    catchError((err) => throwError(() => new Error(err)))
                );
            })
        );
    });

    private selectPokemon = this.updater((state, pokemon: Pokemon) => {
        return {
            ...state,
            selected: pokemon
        };
    });
}
