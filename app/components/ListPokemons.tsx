'use client'

import { _MAIL_TMP } from "../lib/constants";
import ListPokemonsItem from "./ListPokemonsItem";
import { usePokemons } from "./context/PokemonsContext";

export default function ListPokemons() {
    const [pokemons] = usePokemons()

    return (
        <ul className="flex flex-col">
            {pokemons.map(pokemon => <ListPokemonsItem pokemon={pokemon} key={pokemon.pokedexId} />)}
        </ul>
    )
}