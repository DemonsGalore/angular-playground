import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { combineLatest, filter, Subscription } from 'rxjs';

import { PokemonDetailsComponent } from '@pokemon/components';
import { PokemonService } from '@pokemon/services';
import { PokemonStore } from '@pokemon/pokemon.store';
import { BasePageComponent } from '@shared/components';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        RouterLink,
        RouterLinkActive,
        PokemonDetailsComponent
    ],
    providers: [
        PokemonService,
        PokemonStore
    ],
    selector: 'app-pokemon',
    styleUrls: ['pokemon.component.scss'],
    templateUrl: 'pokemon.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent extends BasePageComponent implements OnDestroy, OnInit {
    pokemonStore = inject(PokemonStore);
    router = inject(Router);
    defaultSelectionSubscription = Subscription.EMPTY;

    ngOnInit() {
        this.pokemonStore.fetchData();

        this.defaultSelectionSubscription = combineLatest([
            this.pokemonStore.selectFirstPokemon$.pipe(
                filter((pokemon) => pokemon !== null)
            ),
            this.route.params
        ]).subscribe(([pokemon, params]) => {
            if ('name' in params) {
                this.selectPokemon(params['name']);
            } else if (pokemon) {
                this.router.navigateByUrl(`/pokemon/${pokemon.name}`);
            }
        });
    }

    private selectPokemon(name: string): void {
        this.pokemonStore.fetchPokemonByName(name);
    }

    ngOnDestroy(): void {
        this.defaultSelectionSubscription.unsubscribe();
    }
}
