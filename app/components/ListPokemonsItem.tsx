'use client'

import { Pokemon } from "../lib/definitions";
import Image from 'next/image'
import { useTeam } from './context/TeamContext';
import { _NB_MAX_IN_TEAM } from "../lib/constants";
import Link from "next/link";
import RemoveOfTeam from "./buttons/RemoveOfTeam";
import AddInTeam from "./buttons/AddInTeam";

export default function ListPokemonsItem({ pokemon }: { pokemon: Pokemon }) {
    const [team] = useTeam()

    const hasPokemonInTeam = [...team].find(p => p.pokedexId === pokemon.pokedexId)

    return (
        <li className="basis-1/4 p-2" key={pokemon.pokedexId}>
            <div className="bg-violet-200 h-full rounded-xl p-4 flex flex-col">
                <Link href={`/pokemons/${pokemon.pokedexId}`}>
                    <Image
                        src={pokemon.image}
                        width={48}
                        height={48}
                        alt={pokemon.name}
                        className="mb-2 mx-auto"
                    />
                </Link>

                <div className="text-center mb-4">
                    <h2 className="font-bold text-violet-900 text-xl">{pokemon.name}</h2>
                    <p>Pokedex id : {pokemon.pokedexId}</p>
                </div>

                <div className="flex flx-wrap justify-center">
                    {(!hasPokemonInTeam && team.length < _NB_MAX_IN_TEAM) && <AddInTeam pokemon={pokemon} />}

                    {hasPokemonInTeam && <RemoveOfTeam pokemon={pokemon} />}
                </div>
            </div>
        </li>
    )
}