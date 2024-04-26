import { _MAIL_TMP, _NB_MAX_IN_TEAM } from "@/app/lib/constants"
import { getPokemonByPokedexId, getUser } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
import AddInTeam from "../../components/buttons/AddInTeam"
import RemoveOfTeam from "../../components/buttons/RemoveOfTeam"

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id)

    const [pokemon, user] = await Promise.all([getPokemonByPokedexId(id), getUser(_MAIL_TMP)])

    const idsOfTeam = user.team.split(',').map(id => Number(id))

    if (!pokemon) return

    const hasPokemonInTeam = [...idsOfTeam].find(id => id === pokemon.pokedexId)

    return (
        <main className="px-24 pb-24">
            <Link href={"/"} className="bg-violet-900 py-2 px-4 text-white rounded font-bold mb-8 inline-block">Retour</Link>
            <div className="flex flex-wrap">
                <div className="basis-1/2">
                    <div className="p-4">
                        <Image src={pokemon.image} alt={pokemon.name} width={400} height={400} />
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="p-4">
                        <h1 className="text-violet-900 font-bold text-3xl mb-12">{pokemon.name}</h1>

                        <ul className="flex flex-col mb-12">
                            {Object.entries(pokemon?.stats).map(([statName, statValue], index) =>
                                <li className="mb-4 text-xl" key={index}>
                                    {statName} : {statValue}
                                </li>
                            )}
                        </ul>

                        {!hasPokemonInTeam && idsOfTeam.length < _NB_MAX_IN_TEAM && <AddInTeam pokemon={pokemon} />}

                        {hasPokemonInTeam && <RemoveOfTeam pokemon={pokemon} />}
                    </div>
                </div>
            </div>
        </main>
    )
}