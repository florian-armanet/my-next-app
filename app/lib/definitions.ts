export interface PokemonSpreaded {
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

export interface Pokemon {
    pokedexId: number;
    name: string;
    image: string;
    sprite: string;
    slug: string;
    stats: Stats;
}

interface Stats {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    team: string;
};

export type Team = Pokemon[]