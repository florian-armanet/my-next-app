import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import { Pokemon, PokemonSpreaded, User } from './definitions';
import { _LIMIT_SEARCH } from './constants';

/**
 * 
 * @returns 
 */
export async function fetchFirstPokemons() {
    noStore();

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    try {
        const data = await sql<PokemonSpreaded>`
        SELECT 
            pokemons.pokedexId,
            pokemons.name,
            pokemons.image,
            pokemons.sprite,
            pokemons.slug,
            pokemons.HP,
            pokemons.attack,
            pokemons.defense,
            pokemons.special_attack,
            pokemons.special_defense,
            pokemons.speed
        FROM pokemons
        LIMIT ${_LIMIT_SEARCH};
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
        throw new Error('Failed to fetch the first pokemons.');
    }
}

/**
 * 
 * @param pokedexId 
 * @returns 
 */
export async function getPokemonByPokedexId(pokedexId: number) {
    noStore();

    if (!pokedexId) return

    try {
        const data = await sql<PokemonSpreaded>`
        SELECT 
            pokemons.pokedexId,
            pokemons.name,
            pokemons.image,
            pokemons.sprite,
            pokemons.slug,
            pokemons.HP,
            pokemons.attack,
            pokemons.defense,
            pokemons.special_attack,
            pokemons.special_defense,
            pokemons.speed
        FROM pokemons
        WHERE pokemons.pokedexId = ${pokedexId};
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

        const pokemon: Pokemon = dataFormatted[0]

        return pokemon
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch the pokemon.');
    }
}

/**
 * 
 * @param query 
 */
export async function fetchFilteredPokemons(query: string) {
    noStore()

    try {
        const data = await sql<PokemonSpreaded>`
        SELECT 
            pokemons.pokedexId,
            pokemons.name,
            pokemons.image,
            pokemons.sprite,
            pokemons.slug,
            pokemons.HP,
            pokemons.attack,
            pokemons.defense,
            pokemons.special_attack,
            pokemons.special_defense, 
            pokemons.speed
        FROM pokemons
        WHERE pokemons.name ILIKE ${`%${query}%`}
        ORDER BY pokemons.pokedexId ASC
        LIMIT ${_LIMIT_SEARCH};
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

        const pokemonsFiltered: Pokemon[] = dataFormatted

        return pokemonsFiltered
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch the filtered pokemons.');
    }
}

/**
 * 
 * @param email 
 * @returns 
 */
export async function getUser(email: string) {
    noStore();

    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        
        return user.rows[0] as User;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}