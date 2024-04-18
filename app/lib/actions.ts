'use server'

import { sql } from "@vercel/postgres";
import { Pokemon, Team, User } from "./definitions";
import { _MAIL_TMP } from "./constants";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

export async function addPokemonInTeam(team: Team, pokemon: Pokemon) {
    if(!team.length || !Object.keys(pokemon).length) return

    const teamPokedexid = [...team, String(pokemon.pokedexId)]

    await sql`
    UPDATE users
    SET team = ${teamPokedexid.join(',')}
    WHERE email = ${_MAIL_TMP}
    `
    revalidatePath('/');
    redirect('/');
}

export async function removePokemonOfTeam(team: Team, pokemon: Pokemon) {
    if(!team.length || !Object.keys(pokemon).length) return
    
    const teamPokedexidUpdated = team.filter(pokId => pokId !== pokemon.pokedexId)

    await sql`
    UPDATE users
    SET team = ${teamPokedexidUpdated.join(',')}
    WHERE email = ${_MAIL_TMP}
    `
    revalidatePath('/');
    redirect('/');
}