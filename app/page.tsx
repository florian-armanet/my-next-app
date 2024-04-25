import { Suspense } from "react";
import ListPokemonsSkeleton from "./components/skeleton/ListPokemonsSkeleton";
import ListPokemons from "./components/ListPokemons";
import Team from "./components/Team";
import UserProvider from "./components/context/UserContext";
import TeamProvider from "./components/context/TeamContext";
import { fetchFilteredPokemons, getUser, getPokemonByPokedexId } from "./lib/data";
import { _MAIL_TMP } from "./lib/constants";
import PokemonsProvider from "./components/context/PokemonsContext";
import Search from "./components/Search";
import QueryProvider from "./components/context/QueryContext";
import { Team as TypeTeam } from "./lib/definitions";

export default async function Home(
    { searchParams }: { searchParams?: { query: string } }
) {
    const query = searchParams?.query || ''

    const user = await getUser(_MAIL_TMP)
    const pokemons = await fetchFilteredPokemons(query)

    const idsOfTeam = user.team.split(',').map(id => Number(id))
    const team = await Promise.all([...idsOfTeam.map(idsOfTeam => getPokemonByPokedexId(idsOfTeam)).filter(p => p)]) as TypeTeam

    return (
        <main className="flex min-h-screen flex-col">
            <UserProvider user={user}>
                <PokemonsProvider pokemons={pokemons}>
                    <TeamProvider team={team}>
                        <QueryProvider query={query}>
                            <Team />
                            <div className="px-24 pb-24">
                                <Search />
                                <Suspense fallback={<ListPokemonsSkeleton />}>
                                    <ListPokemons pokemons={pokemons} />
                                </Suspense>
                            </div>
                        </QueryProvider>
                    </TeamProvider>
                </PokemonsProvider>
            </UserProvider>
        </main>
    );
}