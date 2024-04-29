'use client'

import { Pokemon } from '@/app/lib/definitions';
import { useTeam } from '../context/TeamContext';
import { removePokemonOfTeam } from "../../lib/actions";

export default function RemoveOfTeam({ pokemon }: { pokemon: Pokemon }) {
    const [team, setTeam] = useTeam()

    const handleRemovePokemon = () => {
        removePokemonOfTeam(team, pokemon)
        setTeam([...team].filter(p => p.pokedexId !== pokemon.pokedexId))
    }

    return (
        <div className="flex flex-wrap justify-start">
            <div onClick={handleRemovePokemon} className="Button Button--red">
                <div className='flex flex-wrap items-center'>
                    <i className="Icon-close mr-2 font-bold text-xl"></i>
                    <span className='lg-down:text-sm'>{`Retirer de l'équipe`}</span>
                </div>
            </div>
        </div>
    )
}