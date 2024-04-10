import { fetchFirstPokemons } from "../lib/data";
import Image from 'next/image'

export default async function ListPokemons() {
    const firstPokemons = await fetchFirstPokemons()

    return (
        <ul className="flex flex-col">
            {firstPokemons.map(pokemon =>
                <li className="flex flex-wrap items-center py-2 border-b border-gray-100" key={pokemon.pokedexId}>
                    <Image
                        src={pokemon.sprite}
                        width={48}
                        height={48}
                        alt={pokemon.name}
                        className="mr-4"
                    />
                    <div className="flex-1">
                        <p>{pokemon.name}</p>
                        <p>Pokedex id : {pokemon.pokedexId}</p>
                        <ul className="flex flex-wrap">
                            {Object.entries(pokemon?.stats).map(([statName, statValue], index) =>
                                <li className="mr-4" key={index}>
                                    {statName} : {statValue}
                                </li>
                            )}
                        </ul>
                    </div>
                </li>)}
        </ul>
    )
}