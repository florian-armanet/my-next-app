import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import { Pokemon, PokemonSpreaded } from './definitions';

export async function fetchFirstPokemons() {
    noStore();

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
        const data = await sql<PokemonSpreaded>`
        SELECT pokemons.pokedexId, pokemons.name, pokemons.image, pokemons.sprite, pokemons.slug, pokemons.HP, pokemons.attack, pokemons.defense, pokemons.special_attack, pokemons.special_defense, pokemons.speed
        FROM pokemons
        LIMIT 10;
        `

        const dataFormatted = [...data.rows].map(p => {
            const stats = {
                hp: p.hp,
                attack: p.attack,
                defense: p.defense,
                special_attack: p.special_attack,
                special_defense: p.special_defense,
                speed: p.speed,
            }

            return { pokedexId: p.pokedexid, name: p.name, image: p.image, sprite: p.sprite, slug: p.slug, stats }
        })

        const firstPokemons: Pokemon[] = dataFormatted

        return firstPokemons
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch the latest invoices.');
    }
}