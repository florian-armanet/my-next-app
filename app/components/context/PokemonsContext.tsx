"use client";
import { Pokemon } from "@/app/lib/definitions";
import React, { createContext, useState } from "react";

const usePokemonsState = (initialPokemons: Pokemon[]) => useState<Pokemon[]>(initialPokemons);

export const PokemonsContext = createContext<ReturnType<
    typeof usePokemonsState
> | null>(null);

export const usePokemons = () => {
    const pokemons = React.useContext(PokemonsContext);
    if (!pokemons) {
        throw new Error("usePokemons must be used within a PokemonsProvider");
    }
    return pokemons;
};

const PokemonsProvider = ({
    pokemons: initialPokemons,
    children,
}: {
    pokemons: Pokemon[];
    children: React.ReactNode;
}) => {
    const [pokemons, setPokemons] = usePokemonsState(initialPokemons);

    return (
        <PokemonsContext.Provider value={[pokemons, setPokemons]}>
            {children}
        </PokemonsContext.Provider>
    );
};

export default PokemonsProvider;