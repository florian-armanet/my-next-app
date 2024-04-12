import { getPokemonByPokedexId } from "../lib/data";
import Image from 'next/image'

export default async function TeamItem({ pokemonId }: { pokemonId: number }) {
    const pokemon = await getPokemonByPokedexId(pokemonId)

    if (!pokemon) return

    return (
        <div className="bg-gray-300 rounded-full h-40 w-40 m-2 flex flex-wrap items-center justify-center p-4 border-2 border-gray-400 overflow-hidden cursor-pointer">
            <Image src={pokemon.image} alt={pokemon.name} width={124} height={124} className="" priority={true} />
        </div>
    )
}