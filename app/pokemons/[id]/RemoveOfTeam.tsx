'use client'

import { Pokemon } from '@/app/lib/definitions';
import { useTeam } from '../../components/context/TeamContext';
import { removePokemonOfTeam } from "../../lib/actions";

export default function RemoveOfTeam({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const handleRemovePokemon = () => {
        removePokemonOfTeam(team, pokemon)
        setTeam([...team].filter(p => p.pokedexId !== pokemon.pokedexId))
    }

    return (
        <div className="flex flex-wrap justify-start">
            <div onClick={handleRemovePokemon} className="bg-red-500 py-2 px-4 text-white rounded font-bold mb-12 flex flex-wrap items-center cursor-pointer">
                <i className="Icon-close mr-2 font-bold text-xl"></i>
                <span>{`Retirer de l'équipe`}</span>
            </div>
        </div>
    )
}