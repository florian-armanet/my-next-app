import { _MAIL_TMP, _NB_MAX_IN_TEAM } from "@/app/lib/constants"
import { getPokemonByPokedexId, getUser } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
import AddInTeam from "../../components/buttons/AddInTeam"
import RemoveOfTeam from "../../components/buttons/RemoveOfTeam"
import Stats from "@/app/components/Stats"

export default async function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id)

    const [pokemon, user] = await Promise.all([getPokemonByPokedexId(id), getUser(_MAIL_TMP)])

    const idsOfTeam = user.team.split(',').map(id => Number(id))

    if (!pokemon) return

    const hasPokemonInTeam = [...idsOfTeam].find(id => id === pokemon.pokedexId)

    return (
        <main className="px-4 lg:px-24 pb-12 lg:pb-24">
            <Link href={"/"} className="Button Button--primary">Retour</Link>
            <div className="flex flex-wrap">
                <div className="basis-full xs:basis-1/2">
                    <div className="p-4">
                        <Image src={pokemon.image} alt={pokemon.name} width={400} height={400} />
                    </div>
                </div>
                <div className="basis-full xs:basis-1/2">
                    <div className="p-4">
                        <h1 className="text-primary-base font-bold text-3xl mb-8 lg:mb-12">{pokemon.name}</h1>

                        <Stats stats={pokemon.stats} />

                        {!hasPokemonInTeam && idsOfTeam.length < _NB_MAX_IN_TEAM && <AddInTeam pokemon={pokemon} />}

                        {hasPokemonInTeam && <RemoveOfTeam pokemon={pokemon} />}
                    </div>
                </div>
            </div>
        </main>
    )
}