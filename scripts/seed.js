const { db } = require('@vercel/postgres');
const { pokemons, users } = require('../app/lib/placeholder-data.js')
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        team TEXT NOT NULL
      );
    `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
        INSERT INTO users (id, name, email, password, team)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.team})
        ON CONFLICT (id) DO NOTHING;
      `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedPokemons(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "pokemons" table if it doesn't exist
        const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS pokemons (
    id INT NOT NULL UNIQUE PRIMARY KEY,
    pokedexId INT NOT NULL UNIQUE,
    name TEXT NOT NULL UNIQUE,
    image VARCHAR(255) NOT NULL,
    sprite VARCHAR(255) NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    HP INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    special_attack INT NOT NULL,
    special_defense INT NOT NULL,
    speed INT NOT NULL
  );
`;

        console.log(`Created "pokemons" table`);

        // Insert data into the "pokemons" table
        const insertedPokemons = await Promise.all(
            pokemons.map(
                (pokemon) => client.sql`
        INSERT INTO pokemons (id, pokedexId, name, image, sprite, slug, HP, attack, defense, special_attack, special_defense, speed)
        VALUES (${pokemon.id}, ${pokemon.pokedexId}, ${pokemon.name}, ${pokemon.image}, ${pokemon.sprite}, ${pokemon.slug}, ${pokemon.HP}, ${pokemon.attack}, ${pokemon.defense}, ${pokemon.special_attack}, ${pokemon.special_defense}, ${pokemon.speed})
        ON CONFLICT (id) DO NOTHING;
      `,
            ),
        );

        console.log(`Seeded ${insertedPokemons.length} pokemons`);

        return {
            createTable,
            pokemons: insertedPokemons,
        };
    } catch (error) {
        console.error('Error seeding pokemons:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedPokemons(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
