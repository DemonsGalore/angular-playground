import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Pokemon, PokemonResponse, PokemonResult } from '@pokemon/interfaces';

@Injectable()
export class PokemonService {
    private http = inject(HttpClient);

    fetchPokemon(): Observable<PokemonResult[]> {
        return this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=150').pipe(
            map((res) => res.results)
        );
    }

    fetchPokemonByName(name: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    }
}
