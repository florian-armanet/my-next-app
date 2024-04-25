'use client'

import { Pokemon } from "../lib/definitions";
import Image from 'next/image'
import { addPokemonInTeam, removePokemonOfTeam } from "../lib/actions";
import { useTeam } from './context/TeamContext';
import { _NB_MAX_IN_TEAM } from "../lib/constants";

export default function ListPokemonsItem({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const hasPokemonInTeam = [...team].find(p => p.pokedexId === pokemon.pokedexId)

    const handleAddPokemon = () => {
        addPokemonInTeam(team, pokemon)
        setTeam([...team, pokemon])
    }

    const handleRemovePokemon = () => {
        removePokemonOfTeam(team, pokemon)
        setTeam([...team].filter(p => p.pokedexId !== pokemon.pokedexId))
    }

    return (
        <li className="basis-1/4 p-2" key={pokemon.pokedexId}>
            <div className="bg-violet-200 h-full rounded-xl p-4 flex flex-col">
                <Image
                    src={pokemon.sprite}
                    width={48}
                    height={48}
                    alt={pokemon.name}
                    className="mb-2 mx-auto"
                />

                <div className="text-center mb-4">
                    <p className="font-bold">{pokemon.name}</p>
                    <p>Pokedex id : {pokemon.pokedexId}</p>
                    {/* <ul className="flex flex-wrap">
                        {Object.entries(pokemon?.stats).map(([statName, statValue], index) =>
                            <li className="mr-4" key={index}>
                                {statName} : {statValue}
                            </li>
                        )}
                    </ul> */}
                </div>

                <div className="flex flx-wrap justify-center">
                    {(!hasPokemonInTeam && team.length < _NB_MAX_IN_TEAM) &&
                        <i onClick={handleAddPokemon} className="Icon-plus p-2 bg-violet-800 text-white font-bold rounded-lg h-8 w-8 flex flex-wrap justify-center items-center leading-none cursor-pointer" />}

                    {hasPokemonInTeam &&
                        <i onClick={handleRemovePokemon} className="Icon-close p-2 bg-red-500 text-white font-bold rounded-lg h-8 w-8 flex flex-wrap justify-center items-center leading-none cursor-pointer" />}
                </div>
            </div>
        </li>
    )
}