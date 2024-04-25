'use client'

import { Pokemon } from '@/app/lib/definitions';
import { useTeam } from '../../components/context/TeamContext';
import { addPokemonInTeam } from "../../lib/actions";

export default function AddInTeam({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const handleAddPokemon = () => {
        addPokemonInTeam(team, pokemon)
        setTeam([...team, pokemon])
    }

    return (
        <div className="flex flex-wrap justify-start">
            <div onClick={handleAddPokemon} className="bg-violet-900 py-2 px-4 text-white rounded font-bold mb-12 flex flex-wrap items-center cursor-pointer">
                <i className="Icon-plus mr-2 font-bold text-xl"></i>
                <span>{`Ajouter à l'équipe`}</span>
            </div>
        </div>
    )
}