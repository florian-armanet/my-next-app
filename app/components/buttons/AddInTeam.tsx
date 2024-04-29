'use client'

import { Pokemon } from '@/app/lib/definitions';
import { useTeam } from '../context/TeamContext';
import { addPokemonInTeam } from "../../lib/actions";

export default function AddInTeam({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const handleAddPokemon = () => {
        addPokemonInTeam(team, pokemon)
        setTeam([...team, pokemon])
    }

    return (
        <div className="flex flex-wrap justify-start">
            <div onClick={handleAddPokemon} className="Button Button--primary">
                <div className='flex flex-wrap items-center'>
                    <i className="Icon-plus mr-2 font-bold text-xl"></i>
                    <span className='lg-down:text-sm'>{`Ajouter à l'équipe`}</span>
                </div>
            </div>
        </div>
    )
}