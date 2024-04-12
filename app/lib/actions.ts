'use server'

import { sql } from "@vercel/postgres";
import { Pokemon, User } from "./definitions";
import { _MAIL_TMP } from "./constants";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

export async function addPokemonInTeam(user: User, pokemon: Pokemon) {
    if(!Object.keys(user).length) return
    if(!Object.keys(pokemon).length) return

    console.log('user: ', user)
    const teamPokedexid = [...user.team.split(','), String(pokemon.pokedexId)]
    console.log('teamPokedexid: ', teamPokedexid)
    console.log('teamPokedexid: ', teamPokedexid.join(','))

    await sql`
    UPDATE users
    SET team = ${teamPokedexid.join(',')}
    WHERE email = ${_MAIL_TMP}
    `
    revalidatePath('/dashboard/invoices');
    redirect('/');
}