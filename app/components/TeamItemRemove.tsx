'use client'

import { removePokemonOfTeam } from "../lib/actions"
import { Pokemon } from "../lib/definitions"
import { useTeam } from "./context/TeamContext"

export default function TeamItemRemove({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const handleClick = () => {
        removePokemonOfTeam(team, pokemon)
        setTeam([...team].filter(p => p.pokedexId !== pokemon.pokedexId))
    }

    return (
        <button onClick={handleClick} className="absolute bottom-1 w-6 h-6 bg-red-500 rounded-lg text-sm text-white font-bold">X</button>
    )
}