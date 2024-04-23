import { _MAIL_TMP } from "../lib/constants";
import { Pokemon } from "../lib/definitions";
import ListPokemonsItem from "./ListPokemonsItem";

export default async function ListPokemons({ pokemons }: { pokemons: Pokemon[] }) {
    return (
        <>
            {
                pokemons.length ?
                    <ul className="flex flex-col">
                        {pokemons.map(pokemon => <ListPokemonsItem pokemon={pokemon} key={pokemon.pokedexId} />)}
                    </ul>
                    :
                    <p className="p-8 border-violet-900 border-4 rounded text-xl text-violet-900 font-bold text-center">
                        Aucun résultat
                    </p>
            }
        </>
    )
}