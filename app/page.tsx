import { Suspense } from "react";
import ListPokemonsSkeleton from "./components/skeleton/ListPokemonsSkeleton";
import ListPokemons from "./components/ListPokemons";
import Team from "./components/Team";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col p-24">
            <Team/>
            <Suspense fallback={<ListPokemonsSkeleton/>}>
                <ListPokemons/>
            </Suspense>
        </main>
    );
}