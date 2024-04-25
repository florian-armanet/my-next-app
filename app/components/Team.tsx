"use client";

import { _MAIL_TMP, _NB_MAX_IN_TEAM } from '@/app/lib/constants'
import TeamItem from './TeamItem';
import { Suspense } from 'react';
import TeamItemSkeleton from './skeleton/TeamItemSkeleton';
import TeamItemAdd from './TeamItemAdd';
import { useTeam } from './context/TeamContext';
import Image from 'next/image';

export default function Team() {
    const [team] = useTeam()
    const arrayPlaceholder = new Array(_NB_MAX_IN_TEAM).fill(null)

    return (
        <section className="relative mb-12 py-12">
            <div className='z-0 absolute inset-0'>
                <Image src="/pokemon_background.jpg" alt="Pokemon" className="object-cover h-full w-full" width={1920} height={1080} priority={true} />
                <span className='absolute inset-0 bg-black/30'></span>
            </div>
            <div className='relative z-1 flex flex-col items-center'>
                <h2 className="mb-12 text-3xl font-bold text-white bg-violet-900 rounded-xl px-8 py-4">
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
            </div>
        </section>
    )
}