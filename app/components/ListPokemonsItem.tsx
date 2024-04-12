'use client'

import { Pokemon, User } from "../lib/definitions";
import Image from 'next/image'
import { addPokemonInTeam } from "../lib/actions";

export default function ListPokemonsItem({ pokemon, user }: { pokemon: Pokemon, user: User }) {
    const handleClick = () => {
        addPokemonInTeam(user, pokemon)
    }

    return (
        <li className="flex flex-wrap items-center py-2 border-b border-gray-100" key={pokemon.pokedexId}>
            <Image
                src={pokemon.sprite}
                width={48}
                height={48}
                alt={pokemon.name}
                className="mr-4"
            />

            <div className="flex-1 mr-4">
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

            <button onClick={handleClick} className="p-2 bg-green-500">Ajouter</button>
        </li>
    )
}