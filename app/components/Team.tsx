"use client";

import { _MAIL_TMP, _NB_MAX_IN_TEAM } from '@/app/lib/constants'
import TeamItem from './TeamItem';
import { Suspense } from 'react';
import TeamItemSkeleton from './skeleton/TeamItemSkeleton';
import TeamItemAdd from './TeamItemAdd';
import { useTeam } from './context/TeamContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Team() {
    const [team] = useTeam()
    const arrayPlaceholder = new Array(_NB_MAX_IN_TEAM).fill(null)

    const statsOfTeam = [...team].map(pokemon => pokemon.stats)

    const averageStatsOfTeam = [...statsOfTeam].reduce((acc: { [key: string]: number }, curr, index, array) => {
        Object.entries(curr).forEach(([key, value]) => {
            acc[key] = index === 0 ? value : acc[key] + value

            if (index === (array.length - 1)) {
                acc[key] = Math.round(acc[key] / team.length)
            }
        })

        return acc
    }, {})

    return (
        <section className="relative mb-6 md:mb-12 py-6 md:py-12">
            <div className='z-0 absolute inset-0'>
                <Image src="/pokemon_background.jpg" alt="Pokemon" className="object-cover h-full w-full" width={1920} height={1080} priority={true} />
                <span className='absolute inset-0 bg-black/50'></span>
            </div>
            <div className='relative z-1 flex flex-col items-center'>
                <h2 className="mx-4 mb-8 md:mb-12 text-xl md:text-3xl font-bold text-violet-900 bg-violet-100 rounded-xl px-8 py-4">
                    Créez votre équipe avec vos 6 pokemons préférés !
                </h2>
                <div className='flex flex-wrap justify-center w-full'>
                    <div className='max-w-full lg:max-w-[650px] w-full pr-4 lg:border-r-2 border-white mb-8 lg:mb-0'>
                        <h2 className='text-center text-2xl md:text-3xl text-white font-bold mb-4 lg:mb-8'>{`Equipe`}</h2>
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

                    <div className='px-4 lg:px-12 flex-1'>
                        <h2 className='text-center text-white text-2xl md:text-3xl font-bold mb-4 lg:mb-10'>{`Stats de l'équipe (moyenne)`}</h2>
                        <ul className="flex flex-col text-white">
                            {Object.entries(averageStatsOfTeam).map(([statName, statValue], index) =>
                                <li className="mb-4 text-xl" key={index}>
                                    <span>{statName} : </span><span>{statValue}</span>
                                    <motion.div 
                                    initial={{ width: 0 }} 
                                    animate={{ width: `${statValue}%` }}
                                    transition={{ease: "easeInOut", duration: 1}}
                                    className='bg-violet-500 rounded h-4'/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}