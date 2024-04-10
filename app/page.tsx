import { Suspense } from "react";
import ListPokemonsSkeleton from "./components/skeleton/ListPokemonsSkeleton";
import ListPokemons from "./components/ListPokemons";

export default async function Home() {

    return (
        <main className="flex min-h-screen flex-col p-24">
            <Suspense fallback={<ListPokemonsSkeleton/>}>
                <ListPokemons/>
            </Suspense>
        </main>
    );
}
