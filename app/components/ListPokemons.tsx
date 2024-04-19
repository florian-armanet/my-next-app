'use client'

import { _MAIL_TMP } from "../lib/constants";
import { Pokemon } from "../lib/definitions";
import ListPokemonsItem from "./ListPokemonsItem";

export default async function ListPokemons({ pokemons }: { pokemons: Pokemon[] }) {
    return (
        <ul className="flex flex-col">
            {pokemons.map(pokemon => <ListPokemonsItem pokemon={pokemon} key={pokemon.pokedexId} />)}
        </ul>
    )
}