"use client";

import { _MAIL_TMP, _NB_MAX_IN_TEAM } from '@/app/lib/constants'
import TeamItem from './TeamItem';
import { Suspense } from 'react';
import TeamItemSkeleton from './skeleton/TeamItemSkeleton';
import TeamItemAdd from './TeamItemAdd';
import { useTeam } from './context/TeamContext';

export default function Team() {
    const [team] = useTeam()
    const arrayPlaceholder = new Array(_NB_MAX_IN_TEAM).fill(null)

    return (
        <section className="mb-12 flex flex-col items-center">
            <h2 className="mb-6 text-3xl font-bold text-white bg-violet-900 rounded-xl px-8 py-4">
                Créez votre équipe avec vos 6 pokemons préférés !
            </h2>
            <ul className="flex flex-wrap justify-center">
                {arrayPlaceholder.map((_, index) =>
                    <li key={index}
                        className=''>
                        {index < team.length &&
                            <Suspense fallback={<TeamItemSkeleton />}>
                                <TeamItem pokemon={team[index]} />
                            </Suspense>}
                        {index >= team.length && <TeamItemAdd />}
                    </li>
                )}
            </ul>
        </section>
    )
}