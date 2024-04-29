import { _MAIL_TMP } from "../lib/constants";
import { Pokemon } from "../lib/definitions";
import ListPokemonsItem from "./ListPokemonsItem";

export default async function ListPokemons({ pokemons }: { pokemons: Pokemon[] }) {
    return (
        <>
            {
                pokemons.length ?
                    <ul className="flex flex-wrap">
                        {pokemons.map(pokemon => <ListPokemonsItem pokemon={pokemon} key={pokemon.pokedexId} />)}
                    </ul>
                    :
                    <p className="p-8 border-primary-base border-4 rounded text-xl text-primary-base font-bold text-center">
                        Aucun résultat
                    </p>
            }
        </>
    )
}