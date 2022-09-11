import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Pokemon } from '@pokemon/interfaces';

@Component({
    standalone: true,
    imports: [
        NgIf
    ],
    selector: 'app-pokemon-details',
    templateUrl: 'pokemon-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonDetailsComponent {
    _pokemon: Pokemon | null = null;
    @Input() set pokemon(pokemon: Pokemon | null) { this._pokemon = pokemon; }
    get pokemon(): Pokemon | null { return this._pokemon; }
}
