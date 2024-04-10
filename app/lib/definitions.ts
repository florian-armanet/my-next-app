export type PokemonSpreaded = {
    id: number;
    pokedexid: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

export type Pokemon = {
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: Stats;
}

type Stats = {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}