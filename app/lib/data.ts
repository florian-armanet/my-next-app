import { unstable_noStore as noStore } from 'next/cache';
import { sql } from '@vercel/postgres';
import { Pokemon, PokemonSpreaded, User } from './definitions';

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
        throw new Error('Failed to fetch the latest pokemons.');
    }
}

export async function getPokemonByPokedexId(pokedexId: number) {
    noStore();
    
    if(!pokedexId) return

    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
        const data = await sql<PokemonSpreaded>`
        SELECT pokemons.pokedexId, pokemons.name, pokemons.image, pokemons.sprite, pokemons.slug, pokemons.HP, pokemons.attack, pokemons.defense, pokemons.special_attack, pokemons.special_defense, pokemons.speed
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
        throw new Error('Failed to fetch the latest pokemons.');
    }
}

export async function getUser(email: string) {
    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`;
        console.log('users: ', user.rows)
        return user.rows[0] as User;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}