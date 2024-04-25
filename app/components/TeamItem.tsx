'use client'

import Image from 'next/image'
import TeamItemRemove from "./TeamItemRemove";
import { Pokemon } from '../lib/definitions';
import Link from 'next/link';

export default function TeamItem({ pokemon }: { pokemon: Pokemon }) {
    if (!pokemon) return

    return (
        <div className="relative bg-gray-300 rounded-full h-40 w-40 m-2 flex flex-wrap items-center justify-center p-4 border-4 border-violet-800 overflow-hidden cursor-pointer">
            <Link href={`/pokemons/${pokemon.pokedexId}`}>
                <Image src={pokemon.image} alt={pokemon.name} width={124} height={124} className="" priority={true} />
            </Link>
            <TeamItemRemove pokemon={pokemon} />
        </div>
    )
}