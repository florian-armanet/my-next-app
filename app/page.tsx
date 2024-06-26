import { Suspense } from "react";
import ListPokemonsSkeleton from "./components/skeleton/ListPokemonsSkeleton";
import ListPokemons from "./components/ListPokemons";
import { fetchFilteredPokemons } from "./lib/data";
import PokemonsProvider from "./components/context/PokemonsContext";
import SearchByQuery from "./components/SearchByQuery";
import QueryProvider from "./components/context/QueryContext";

export default async function Home(
    { searchParams }: { searchParams?: { query: string } }
) {
    const query = searchParams?.query || ''
    const pokemons = await fetchFilteredPokemons(query)

    return (
        <main className="z-0 relative flex min-h-screen flex-col">
            <PokemonsProvider pokemons={pokemons}>
                <QueryProvider query={query}>
                    <div className="px-4 lg:px-24 pb-12 lg:pb-24">
                        <SearchByQuery />
                        <Suspense fallback={<ListPokemonsSkeleton />}>
                            <ListPokemons pokemons={pokemons} />
                        </Suspense>
                    </div>
                </QueryProvider>
            </PokemonsProvider>
        </main>
    );
}