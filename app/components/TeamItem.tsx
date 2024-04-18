'use client'

import Image from 'next/image'
import TeamItemRemove from "./TeamItemRemove";
import { usePokemons } from "./context/PokemonsContext";

export default function TeamItem({ pokemonId }: { pokemonId: number }) {
    const [pokemons] = usePokemons()

    const pokemon = pokemons.find(p => p.pokedexId === pokemonId)

    if (!pokemon) return

    return (
        <div className="relative bg-gray-300 rounded-full h-40 w-40 m-2 flex flex-wrap items-center justify-center p-4 border-2 border-gray-400 overflow-hidden cursor-pointer">
            <Image src={pokemon.image} alt={pokemon.name} width={124} height={124} className="" priority={true} />
            <TeamItemRemove pokemon={pokemon} />
        </div>
    )
}