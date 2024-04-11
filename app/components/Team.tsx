import { _MAIL_TMP, _NB_MAX_IN_TEAM } from '@/app/lib/constants'
import { getUser } from "../lib/data";
import TeamItem from './TeamItem';
import { Suspense } from 'react';
import TeamItemSkeleton from './skeleton/TeamItemSkeleton';
import TeamItemAdd from './TeamItemAdd';

export default async function Team() {
    const user = await getUser(_MAIL_TMP)
    const teamPokedexid = user.team.split(',')
    const arrayPlaceholder = new Array(_NB_MAX_IN_TEAM).fill(null)

    return (
        <section className="mb-12 text-center">
            <h2 className="mb-6">Créez votre équipe avec vos 6 pokemons préférés !</h2>
            <ul className="flex flex-wrap justify-center">
                {arrayPlaceholder.map((_, index) =>
                    <li key={index}
                        className=''>
                        {index < teamPokedexid.length &&
                            <Suspense fallback={<TeamItemSkeleton/>}>
                                <TeamItem pokemonId={Number(teamPokedexid[index])} />
                            </Suspense>}
                        {index >= teamPokedexid.length && <TeamItemAdd/>}
                    </li>
                )}
            </ul>
        </section>
    )
}