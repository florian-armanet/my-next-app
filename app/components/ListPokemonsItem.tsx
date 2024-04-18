'use client'

import { Pokemon } from "../lib/definitions";
import Image from 'next/image'
import { addPokemonInTeam, removePokemonOfTeam } from "../lib/actions";
import { useTeam } from './context/TeamContext';
import { _NB_MAX_IN_TEAM } from "../lib/constants";

export default function ListPokemonsItem({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const handleAddPokemon = () => {
        addPokemonInTeam(team, pokemon)
        setTeam([...team, pokemon.pokedexId])
    }

    const handleRemovePokemon = () => {
        removePokemonOfTeam(team, pokemon)
        setTeam([...team].filter(tId => tId !== pokemon.pokedexId))
    }

    return (
        <li className="flex flex-wrap items-center p-2 bg-violet-200 rounded-xl mb-2" key={pokemon.pokedexId}>
            <Image
                src={pokemon.sprite}
                width={48}
                height={48}
                alt={pokemon.name}
                className="mr-4"
            />

            <div className="flex-1 mr-4">
                <p className="font-bold">{pokemon.name}</p>
                <p>Pokedex id : {pokemon.pokedexId}</p>
                <ul className="flex flex-wrap">
                    {Object.entries(pokemon?.stats).map(([statName, statValue], index) =>
                        <li className="mr-4" key={index}>
                            {statName} : {statValue}
                        </li>
                    )}
                </ul>
            </div>

            {(!team.includes(pokemon.pokedexId) && team.length < _NB_MAX_IN_TEAM) &&
                <button onClick={handleAddPokemon} className="p-2 bg-violet-800 text-white font-bold rounded-lg h-8 w-8 flex flex-wrap justify-center items-center leading-none">+</button>}

            {team.includes(pokemon.pokedexId) &&
                <button onClick={handleRemovePokemon} className="p-2 bg-red-500 text-white font-bold rounded-lg h-8 w-8 flex flex-wrap justify-center items-center leading-none">x</button>}
        </li>
    )
}