export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonResult[];
}

export interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface Pokemon {
    base_experience: number;
    height: number;
    id: number;
    name: string;
    sprites: Sprites;
}
