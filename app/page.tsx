import { Suspense } from "react";
import ListPokemonsSkeleton from "./components/skeleton/ListPokemonsSkeleton";
import ListPokemons from "./components/ListPokemons";
import Team from "./components/Team";
import UserProvider from "./components/context/UserContext";
import TeamProvider from "./components/context/TeamContext";
import { fetchFirstPokemons, getUser } from "./lib/data";
import { _MAIL_TMP } from "./lib/constants";
import PokemonsProvider from "./components/context/PokemonsContext";

export default async function Home() {
    const user = await getUser(_MAIL_TMP)
    const firstPokemons = await fetchFirstPokemons()
    const team = user.team.split(',').map(pokedexId => Number(pokedexId))

    return (
        <main className="flex min-h-screen flex-col p-24">
            <UserProvider user={user}>
                <PokemonsProvider pokemons={firstPokemons}>
                    <TeamProvider team={team}>
                        <Team/>
                        <Suspense fallback={<ListPokemonsSkeleton />}>
                            <ListPokemons/>
                        </Suspense>
                    </TeamProvider>
                </PokemonsProvider>
            </UserProvider>
        </main>
    );
}