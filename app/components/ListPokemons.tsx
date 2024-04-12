import { _MAIL_TMP } from "../lib/constants";
import { fetchFirstPokemons, getUser } from "../lib/data";
import ListPokemonsItem from "./ListPokemonsItem";

export default async function ListPokemons() {
    const firstPokemons = await fetchFirstPokemons()
    const user = await getUser(_MAIL_TMP)

    return (
        <ul className="flex flex-col">
            {firstPokemons.map(pokemon => <ListPokemonsItem pokemon={pokemon} user={user} key={pokemon.pokedexId}/>)}
        </ul>
    )
}