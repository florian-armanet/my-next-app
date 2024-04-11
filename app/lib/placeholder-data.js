const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6369b',
        name: 'User',
        email: 'armanet.florian@gmail.com',
        password: '0000',
        team: "4,5,6,7"
    },
];

const pokemons = [
    {
        "id": 1,
        "pokedexId": 1,
        "name": "Bulbizarre",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "slug": "Bulbizarre",
        "HP": 45,
        "attack": 49,
        "defense": 49,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Herbizarre",
                "pokedexId": 2
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 2,
        "pokedexId": 2,
        "name": "Herbizarre",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "slug": "Herbizarre",
        "HP": 60,
        "attack": 62,
        "defense": 63,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Florizarre",
                "pokedexId": 3
            }
        ],
        "apiPreEvolution": {
            "name": "Bulbizarre",
            "pokedexIdd": 1
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 3,
        "pokedexId": 3,
        "name": "Florizarre",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "slug": "Florizarre",
        "HP": 80,
        "attack": 82,
        "defense": 83,
        "special_attack": 100,
        "special_defense": 100,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Herbizarre",
            "pokedexIdd": 2
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 4,
        "pokedexId": 4,
        "name": "Salamèche",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "slug": "Salameche",
        "HP": 39,
        "attack": 52,
        "defense": 43,
        "special_attack": 60,
        "special_defense": 50,
        "speed": 65,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Reptincel",
                "pokedexId": 5
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 5,
        "pokedexId": 5,
        "name": "Reptincel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "slug": "Reptincel",
        "HP": 58,
        "attack": 64,
        "defense": 58,
        "special_attack": 80,
        "special_defense": 65,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Dracaufeu",
                "pokedexId": 6
            }
        ],
        "apiPreEvolution": {
            "name": "Salamèche",
            "pokedexIdd": 4
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 6,
        "pokedexId": 6,
        "name": "Dracaufeu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "slug": "Dracaufeu",
        "HP": 78,
        "attack": 84,
        "defense": 78,
        "special_attack": 109,
        "special_defense": 85,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Reptincel",
            "pokedexIdd": 5
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 7,
        "pokedexId": 7,
        "name": "Carapuce",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "slug": "Carapuce",
        "HP": 44,
        "attack": 48,
        "defense": 65,
        "special_attack": 50,
        "special_defense": 64,
        "speed": 43,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Carabaffe",
                "pokedexId": 8
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 8,
        "pokedexId": 8,
        "name": "Carabaffe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "slug": "Carabaffe",
        "HP": 59,
        "attack": 63,
        "defense": 80,
        "special_attack": 65,
        "special_defense": 80,
        "speed": 58,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Tortank",
                "pokedexId": 9
            }
        ],
        "apiPreEvolution": {
            "name": "Carapuce",
            "pokedexIdd": 7
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 9,
        "pokedexId": 9,
        "name": "Tortank",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "slug": "Tortank",
        "HP": 79,
        "attack": 83,
        "defense": 100,
        "special_attack": 85,
        "special_defense": 105,
        "speed": 78,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Carabaffe",
            "pokedexIdd": 8
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 10,
        "pokedexId": 10,
        "name": "Chenipan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "slug": "Chenipan",
        "HP": 45,
        "attack": 30,
        "defense": 35,
        "special_attack": 20,
        "special_defense": 20,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Chrysacier",
                "pokedexId": 11
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 11,
        "pokedexId": 11,
        "name": "Chrysacier",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "slug": "Chrysacier",
        "HP": 50,
        "attack": 20,
        "defense": 55,
        "special_attack": 25,
        "special_defense": 25,
        "speed": 30,
        "apiTypes": [
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Papilusion",
                "pokedexId": 12
            }
        ],
        "apiPreEvolution": {
            "name": "Chenipan",
            "pokedexIdd": 10
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 12,
        "pokedexId": 12,
        "name": "Papilusion",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "slug": "Papilusion",
        "HP": 60,
        "attack": 45,
        "defense": 50,
        "special_attack": 90,
        "special_defense": 80,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Chrysacier",
            "pokedexIdd": 11
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 13,
        "pokedexId": 13,
        "name": "Aspicot",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "slug": "Aspicot",
        "HP": 40,
        "attack": 35,
        "defense": 30,
        "special_attack": 20,
        "special_defense": 20,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Coconfort",
                "pokedexId": 14
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 14,
        "pokedexId": 14,
        "name": "Coconfort",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "slug": "Coconfort",
        "HP": 45,
        "attack": 25,
        "defense": 50,
        "special_attack": 25,
        "special_defense": 25,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Dardargnan",
                "pokedexId": 15
            }
        ],
        "apiPreEvolution": {
            "name": "Aspicot",
            "pokedexIdd": 13
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 15,
        "pokedexId": 15,
        "name": "Dardargnan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "slug": "Dardargnan",
        "HP": 65,
        "attack": 90,
        "defense": 40,
        "special_attack": 45,
        "special_defense": 80,
        "speed": 75,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Coconfort",
            "pokedexIdd": 14
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 16,
        "pokedexId": 16,
        "name": "Roucool",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "slug": "Roucool",
        "HP": 40,
        "attack": 45,
        "defense": 40,
        "special_attack": 35,
        "special_defense": 35,
        "speed": 56,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Roucoups",
                "pokedexId": 17
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 17,
        "pokedexId": 17,
        "name": "Roucoups",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "slug": "Roucoups",
        "HP": 63,
        "attack": 60,
        "defense": 55,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 71,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Roucarnage",
                "pokedexId": 18
            }
        ],
        "apiPreEvolution": {
            "name": "Roucool",
            "pokedexIdd": 16
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 18,
        "pokedexId": 18,
        "name": "Roucarnage",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "slug": "Roucarnage",
        "HP": 83,
        "attack": 80,
        "defense": 75,
        "special_attack": 70,
        "special_defense": 70,
        "speed": 101,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Roucoups",
            "pokedexIdd": 17
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 19,
        "pokedexId": 19,
        "name": "Rattata",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "slug": "Rattata",
        "HP": 30,
        "attack": 56,
        "defense": 35,
        "special_attack": 25,
        "special_defense": 35,
        "speed": 72,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Rattatac",
                "pokedexId": 20
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 20,
        "pokedexId": 20,
        "name": "Rattatac",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "slug": "Rattatac",
        "HP": 55,
        "attack": 81,
        "defense": 60,
        "special_attack": 50,
        "special_defense": 70,
        "speed": 97,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Rattata",
            "pokedexIdd": 19
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 21,
        "pokedexId": 21,
        "name": "Piafabec",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        "slug": "Piafabec",
        "HP": 40,
        "attack": 60,
        "defense": 30,
        "special_attack": 31,
        "special_defense": 31,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Rapasdepic",
                "pokedexId": 22
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 22,
        "pokedexId": 22,
        "name": "Rapasdepic",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        "slug": "Rapasdepic",
        "HP": 65,
        "attack": 90,
        "defense": 65,
        "special_attack": 61,
        "special_defense": 61,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Piafabec",
            "pokedexIdd": 21
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 23,
        "pokedexId": 23,
        "name": "Abo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        "slug": "Abo",
        "HP": 35,
        "attack": 60,
        "defense": 44,
        "special_attack": 40,
        "special_defense": 54,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Arbok",
                "pokedexId": 24
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 24,
        "pokedexId": 24,
        "name": "Arbok",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        "slug": "Arbok",
        "HP": 60,
        "attack": 95,
        "defense": 69,
        "special_attack": 65,
        "special_defense": 79,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Abo",
            "pokedexIdd": 23
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 25,
        "pokedexId": 25,
        "name": "Pikachu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "slug": "Pikachu",
        "HP": 35,
        "attack": 55,
        "defense": 40,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": [
            {
                "name": "Raichu",
                "pokedexId": 26
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 26,
        "pokedexId": 26,
        "name": "Raichu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        "slug": "Raichu",
        "HP": 60,
        "attack": 90,
        "defense": 55,
        "special_attack": 90,
        "special_defense": 80,
        "speed": 110,
        "apiTypes": [
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Pikachu",
            "pokedexIdd": 25
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 27,
        "pokedexId": 27,
        "name": "Sabelette",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        "slug": "Sabelette",
        "HP": 50,
        "attack": 75,
        "defense": 85,
        "special_attack": 20,
        "special_defense": 30,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Sablaireau",
                "pokedexId": 28
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 28,
        "pokedexId": 28,
        "name": "Sablaireau",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        "slug": "Sablaireau",
        "HP": 75,
        "attack": 100,
        "defense": 110,
        "special_attack": 45,
        "special_defense": 55,
        "speed": 65,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Sabelette",
            "pokedexIdd": 27
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 29,
        "pokedexId": 29,
        "name": "Nidoran♀",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        "slug": "Nidoran-1",
        "HP": 55,
        "attack": 47,
        "defense": 52,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 41,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Nidorina",
                "pokedexId": 30
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 30,
        "pokedexId": 30,
        "name": "Nidorina",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "slug": "Nidorina",
        "HP": 70,
        "attack": 62,
        "defense": 67,
        "special_attack": 55,
        "special_defense": 55,
        "speed": 56,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Nidoqueen",
                "pokedexId": 31
            }
        ],
        "apiPreEvolution": {
            "name": "Nidoran♀",
            "pokedexIdd": 29
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 31,
        "pokedexId": 31,
        "name": "Nidoqueen",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        "slug": "Nidoqueen",
        "HP": 90,
        "attack": 92,
        "defense": 87,
        "special_attack": 75,
        "special_defense": 85,
        "speed": 76,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Nidorina",
            "pokedexIdd": 30
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 32,
        "pokedexId": 32,
        "name": "Nidoran♂",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        "slug": "Nidoran-2",
        "HP": 46,
        "attack": 57,
        "defense": 40,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Nidorino",
                "pokedexId": 33
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 33,
        "pokedexId": 33,
        "name": "Nidorino",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        "slug": "Nidorino",
        "HP": 61,
        "attack": 72,
        "defense": 57,
        "special_attack": 55,
        "special_defense": 55,
        "speed": 65,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Nidoking",
                "pokedexId": 34
            }
        ],
        "apiPreEvolution": {
            "name": "Nidoran♂",
            "pokedexIdd": 32
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 34,
        "pokedexId": 34,
        "name": "Nidoking",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "slug": "Nidoking",
        "HP": 81,
        "attack": 102,
        "defense": 77,
        "special_attack": 85,
        "special_defense": 75,
        "speed": 85,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Nidorino",
            "pokedexIdd": 33
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 35,
        "pokedexId": 35,
        "name": "Mélofée",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        "slug": "Melofee",
        "HP": 70,
        "attack": 45,
        "defense": 48,
        "special_attack": 60,
        "special_defense": 65,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Fée",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Mélodelfe",
                "pokedexId": 36
            }
        ],
        "apiPreEvolution": {
            "name": "Mélo",
            "pokedexIdd": 173
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 36,
        "pokedexId": 36,
        "name": "Mélodelfe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        "slug": "Melodelfe",
        "HP": 95,
        "attack": 70,
        "defense": 73,
        "special_attack": 95,
        "special_defense": 90,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Fée",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Mélofée",
            "pokedexIdd": 35
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 37,
        "pokedexId": 37,
        "name": "Goupix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "slug": "Goupix",
        "HP": 38,
        "attack": 41,
        "defense": 40,
        "special_attack": 50,
        "special_defense": 65,
        "speed": 65,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": [
            {
                "name": "Feunard",
                "pokedexId": 38
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 38,
        "pokedexId": 38,
        "name": "Feunard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        "slug": "Feunard",
        "HP": 73,
        "attack": 76,
        "defense": 75,
        "special_attack": 81,
        "special_defense": 100,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Goupix",
            "pokedexIdd": 37
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 39,
        "pokedexId": 39,
        "name": "Rondoudou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "slug": "Rondoudou",
        "HP": 115,
        "attack": 45,
        "defense": 20,
        "special_attack": 45,
        "special_defense": 25,
        "speed": 20,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Fée",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Grodoudou",
                "pokedexId": 40
            }
        ],
        "apiPreEvolution": {
            "name": "Toudoudou",
            "pokedexIdd": 174
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 40,
        "pokedexId": 40,
        "name": "Grodoudou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        "slug": "Grodoudou",
        "HP": 140,
        "attack": 70,
        "defense": 45,
        "special_attack": 85,
        "special_defense": 50,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Fée",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Rondoudou",
            "pokedexIdd": 39
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 41,
        "pokedexId": 41,
        "name": "Nosferapti",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        "slug": "Nosferapti",
        "HP": 40,
        "attack": 45,
        "defense": 35,
        "special_attack": 30,
        "special_defense": 40,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Nosferalto",
                "pokedexId": 42
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 42,
        "pokedexId": 42,
        "name": "Nosferalto",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        "slug": "Nosferalto",
        "HP": 75,
        "attack": 80,
        "defense": 70,
        "special_attack": 65,
        "special_defense": 75,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Nostenfer",
                "pokedexId": 169
            }
        ],
        "apiPreEvolution": {
            "name": "Nosferapti",
            "pokedexIdd": 41
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 43,
        "pokedexId": 43,
        "name": "Mystherbe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        "slug": "Mystherbe",
        "HP": 45,
        "attack": 50,
        "defense": 55,
        "special_attack": 75,
        "special_defense": 65,
        "speed": 30,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Ortide",
                "pokedexId": 44
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 44,
        "pokedexId": 44,
        "name": "Ortide",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        "slug": "Ortide",
        "HP": 60,
        "attack": 65,
        "defense": 70,
        "special_attack": 85,
        "special_defense": 75,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Rafflesia",
                "pokedexId": 45
            },
            {
                "name": "Joliflor",
                "pokedexId": 182
            }
        ],
        "apiPreEvolution": {
            "name": "Mystherbe",
            "pokedexIdd": 43
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 45,
        "pokedexId": 45,
        "name": "Rafflesia",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        "slug": "Rafflesia",
        "HP": 75,
        "attack": 80,
        "defense": 85,
        "special_attack": 110,
        "special_defense": 90,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Ortide",
            "pokedexIdd": 44
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 46,
        "pokedexId": 46,
        "name": "Paras",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        "slug": "Paras",
        "HP": 35,
        "attack": 70,
        "defense": 55,
        "special_attack": 45,
        "special_defense": 55,
        "speed": 25,
        "apiTypes": [
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Peau Sèche",
            "slug": "Peau-Seche"
        },
        "apiEvolutions": [
            {
                "name": "Parasect",
                "pokedexId": 47
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 47,
        "pokedexId": 47,
        "name": "Parasect",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        "slug": "Parasect",
        "HP": 60,
        "attack": 95,
        "defense": 80,
        "special_attack": 60,
        "special_defense": 80,
        "speed": 30,
        "apiTypes": [
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Peau Sèche",
            "slug": "Peau-Seche"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Paras",
            "pokedexIdd": 46
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 48,
        "pokedexId": 48,
        "name": "Mimitoss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        "slug": "Mimitoss",
        "HP": 60,
        "attack": 55,
        "defense": 50,
        "special_attack": 40,
        "special_defense": 55,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Aéromite",
                "pokedexId": 49
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 49,
        "pokedexId": 49,
        "name": "Aéromite",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        "slug": "Aeromite",
        "HP": 70,
        "attack": 65,
        "defense": 60,
        "special_attack": 90,
        "special_defense": 75,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Mimitoss",
            "pokedexIdd": 48
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 50,
        "pokedexId": 50,
        "name": "Taupiqueur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        "slug": "Taupiqueur",
        "HP": 10,
        "attack": 55,
        "defense": 25,
        "special_attack": 35,
        "special_defense": 45,
        "speed": 95,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Triopikeur",
                "pokedexId": 51
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 51,
        "pokedexId": 51,
        "name": "Triopikeur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        "slug": "Triopikeur",
        "HP": 35,
        "attack": 100,
        "defense": 50,
        "special_attack": 50,
        "special_defense": 70,
        "speed": 120,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Taupiqueur",
            "pokedexIdd": 50
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 52,
        "pokedexId": 52,
        "name": "Miaouss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "slug": "Miaouss",
        "HP": 40,
        "attack": 45,
        "defense": 35,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Persian",
                "pokedexId": 53
            },
            {
                "name": "Berserkatt",
                "pokedexId": 863
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 53,
        "pokedexId": 53,
        "name": "Persian",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        "slug": "Persian",
        "HP": 65,
        "attack": 70,
        "defense": 60,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 115,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Miaouss",
            "pokedexIdd": 52
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 54,
        "pokedexId": 54,
        "name": "Psykokwak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        "slug": "Psykokwak",
        "HP": 50,
        "attack": 52,
        "defense": 48,
        "special_attack": 65,
        "special_defense": 50,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Akwakwak",
                "pokedexId": 55
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 55,
        "pokedexId": 55,
        "name": "Akwakwak",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        "slug": "Akwakwak",
        "HP": 80,
        "attack": 82,
        "defense": 78,
        "special_attack": 95,
        "special_defense": 80,
        "speed": 85,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Psykokwak",
            "pokedexIdd": 54
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 56,
        "pokedexId": 56,
        "name": "Férosinge",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        "slug": "Ferosinge",
        "HP": 40,
        "attack": 80,
        "defense": 35,
        "special_attack": 35,
        "special_defense": 45,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Colossinge",
                "pokedexId": 57
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 57,
        "pokedexId": 57,
        "name": "Colossinge",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        "slug": "Colossinge",
        "HP": 65,
        "attack": 105,
        "defense": 60,
        "special_attack": 60,
        "special_defense": 70,
        "speed": 95,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Férosinge",
            "pokedexIdd": 56
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 58,
        "pokedexId": 58,
        "name": "Caninos",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        "slug": "Caninos",
        "HP": 55,
        "attack": 70,
        "defense": 45,
        "special_attack": 70,
        "special_defense": 50,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": [
            {
                "name": "Arcanin",
                "pokedexId": 59
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 59,
        "pokedexId": 59,
        "name": "Arcanin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "slug": "Arcanin",
        "HP": 90,
        "attack": 110,
        "defense": 80,
        "special_attack": 100,
        "special_defense": 80,
        "speed": 95,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Caninos",
            "pokedexIdd": 58
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 60,
        "pokedexId": 60,
        "name": "Ptitard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        "slug": "Ptitard",
        "HP": 40,
        "attack": 50,
        "defense": 40,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Absorbe-Eau",
            "slug": "Absorbe-Eau"
        },
        "apiEvolutions": [
            {
                "name": "Têtarte",
                "pokedexId": 61
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 61,
        "pokedexId": 61,
        "name": "Têtarte",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "slug": "Tetarte",
        "HP": 65,
        "attack": 65,
        "defense": 65,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Absorbe-Eau",
            "slug": "Absorbe-Eau"
        },
        "apiEvolutions": [
            {
                "name": "Tartard",
                "pokedexId": 62
            },
            {
                "name": "Tarpaud",
                "pokedexId": 186
            }
        ],
        "apiPreEvolution": {
            "name": "Ptitard",
            "pokedexIdd": 60
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 62,
        "pokedexId": 62,
        "name": "Tartard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        "slug": "Tartard",
        "HP": 90,
        "attack": 95,
        "defense": 95,
        "special_attack": 70,
        "special_defense": 90,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Absorbe-Eau",
            "slug": "Absorbe-Eau"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Têtarte",
            "pokedexIdd": 61
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 63,
        "pokedexId": 63,
        "name": "Abra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "slug": "Abra",
        "HP": 25,
        "attack": 20,
        "defense": 15,
        "special_attack": 105,
        "special_defense": 55,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Kadabra",
                "pokedexId": 64
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 64,
        "pokedexId": 64,
        "name": "Kadabra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        "slug": "Kadabra",
        "HP": 40,
        "attack": 35,
        "defense": 30,
        "special_attack": 120,
        "special_defense": 70,
        "speed": 105,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Alakazam",
                "pokedexId": 65
            }
        ],
        "apiPreEvolution": {
            "name": "Abra",
            "pokedexIdd": 63
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 65,
        "pokedexId": 65,
        "name": "Alakazam",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        "slug": "Alakazam",
        "HP": 55,
        "attack": 50,
        "defense": 45,
        "special_attack": 135,
        "special_defense": 95,
        "speed": 120,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Kadabra",
            "pokedexIdd": 64
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 66,
        "pokedexId": 66,
        "name": "Machoc",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        "slug": "Machoc",
        "HP": 70,
        "attack": 80,
        "defense": 50,
        "special_attack": 35,
        "special_defense": 35,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Machopeur",
                "pokedexId": 67
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 67,
        "pokedexId": 67,
        "name": "Machopeur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        "slug": "Machopeur",
        "HP": 80,
        "attack": 100,
        "defense": 70,
        "special_attack": 50,
        "special_defense": 60,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Mackogneur",
                "pokedexId": 68
            }
        ],
        "apiPreEvolution": {
            "name": "Machoc",
            "pokedexIdd": 66
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 68,
        "pokedexId": 68,
        "name": "Mackogneur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        "slug": "Mackogneur",
        "HP": 90,
        "attack": 130,
        "defense": 80,
        "special_attack": 65,
        "special_defense": 85,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Machopeur",
            "pokedexIdd": 67
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 69,
        "pokedexId": 69,
        "name": "Chétiflor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        "slug": "Chetiflor",
        "HP": 50,
        "attack": 75,
        "defense": 35,
        "special_attack": 70,
        "special_defense": 30,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Boustiflor",
                "pokedexId": 70
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 70,
        "pokedexId": 70,
        "name": "Boustiflor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        "slug": "Boustiflor",
        "HP": 65,
        "attack": 90,
        "defense": 50,
        "special_attack": 85,
        "special_defense": 45,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Empiflor",
                "pokedexId": 71
            }
        ],
        "apiPreEvolution": {
            "name": "Chétiflor",
            "pokedexIdd": 69
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 71,
        "pokedexId": 71,
        "name": "Empiflor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        "slug": "Empiflor",
        "HP": 80,
        "attack": 105,
        "defense": 65,
        "special_attack": 100,
        "special_defense": 70,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Boustiflor",
            "pokedexIdd": 70
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 72,
        "pokedexId": 72,
        "name": "Tentacool",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        "slug": "Tentacool",
        "HP": 40,
        "attack": 40,
        "defense": 35,
        "special_attack": 50,
        "special_defense": 100,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Tentacruel",
                "pokedexId": 73
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 73,
        "pokedexId": 73,
        "name": "Tentacruel",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        "slug": "Tentacruel",
        "HP": 80,
        "attack": 70,
        "defense": 65,
        "special_attack": 80,
        "special_defense": 120,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Tentacool",
            "pokedexIdd": 72
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 74,
        "pokedexId": 74,
        "name": "Racaillou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        "slug": "Racaillou",
        "HP": 40,
        "attack": 80,
        "defense": 100,
        "special_attack": 30,
        "special_defense": 30,
        "speed": 20,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Gravalanch",
                "pokedexId": 75
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 75,
        "pokedexId": 75,
        "name": "Gravalanch",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        "slug": "Gravalanch",
        "HP": 55,
        "attack": 95,
        "defense": 115,
        "special_attack": 45,
        "special_defense": 45,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Grolem",
                "pokedexId": 76
            }
        ],
        "apiPreEvolution": {
            "name": "Racaillou",
            "pokedexIdd": 74
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 76,
        "pokedexId": 76,
        "name": "Grolem",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        "slug": "Grolem",
        "HP": 80,
        "attack": 120,
        "defense": 130,
        "special_attack": 55,
        "special_defense": 65,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Gravalanch",
            "pokedexIdd": 75
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 77,
        "pokedexId": 77,
        "name": "Ponyta",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        "slug": "Ponyta",
        "HP": 50,
        "attack": 85,
        "defense": 55,
        "special_attack": 65,
        "special_defense": 65,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": [
            {
                "name": "Galopa",
                "pokedexId": 78
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 78,
        "pokedexId": 78,
        "name": "Galopa",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        "slug": "Galopa",
        "HP": 65,
        "attack": 100,
        "defense": 70,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 105,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Ponyta",
            "pokedexIdd": 77
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 79,
        "pokedexId": 79,
        "name": "Ramoloss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        "slug": "Ramoloss",
        "HP": 90,
        "attack": 65,
        "defense": 65,
        "special_attack": 40,
        "special_defense": 40,
        "speed": 15,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            },
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Flagadoss",
                "pokedexId": 80
            },
            {
                "name": "Roigada",
                "pokedexId": 199
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 80,
        "pokedexId": 80,
        "name": "Flagadoss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        "slug": "Flagadoss",
        "HP": 95,
        "attack": 75,
        "defense": 110,
        "special_attack": 100,
        "special_defense": 80,
        "speed": 30,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            },
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Ramoloss",
            "pokedexIdd": 79
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 81,
        "pokedexId": 81,
        "name": "Magnéti",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        "slug": "Magneti",
        "HP": 25,
        "attack": 35,
        "defense": 70,
        "special_attack": 95,
        "special_defense": 55,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Acier",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c9/Steel.png"
            },
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Sol",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Magnéton",
                "pokedexId": 82
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 82,
        "pokedexId": 82,
        "name": "Magnéton",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        "slug": "Magneton",
        "HP": 50,
        "attack": 60,
        "defense": 95,
        "special_attack": 120,
        "special_defense": 70,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Acier",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c9/Steel.png"
            },
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Sol",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Magnézone",
                "pokedexId": 462
            }
        ],
        "apiPreEvolution": {
            "name": "Magnéti",
            "pokedexIdd": 81
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 83,
        "pokedexId": 83,
        "name": "Canarticho",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        "slug": "Canarticho",
        "HP": 52,
        "attack": 90,
        "defense": 55,
        "special_attack": 58,
        "special_defense": 62,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Palarticho",
                "pokedexId": 865
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 84,
        "pokedexId": 84,
        "name": "Doduo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        "slug": "Doduo",
        "HP": 35,
        "attack": 85,
        "defense": 45,
        "special_attack": 35,
        "special_defense": 35,
        "speed": 75,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Dodrio",
                "pokedexId": 85
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 85,
        "pokedexId": 85,
        "name": "Dodrio",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "slug": "Dodrio",
        "HP": 60,
        "attack": 110,
        "defense": 70,
        "special_attack": 60,
        "special_defense": 60,
        "speed": 110,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            },
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Doduo",
            "pokedexIdd": 84
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 86,
        "pokedexId": 86,
        "name": "Otaria",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        "slug": "Otaria",
        "HP": 65,
        "attack": 45,
        "defense": 55,
        "special_attack": 45,
        "special_defense": 70,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Isograisse",
            "slug": "Isograisse"
        },
        "apiEvolutions": [
            {
                "name": "Lamantine",
                "pokedexId": 87
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 87,
        "pokedexId": 87,
        "name": "Lamantine",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        "slug": "Lamantine",
        "HP": 90,
        "attack": 70,
        "defense": 80,
        "special_attack": 70,
        "special_defense": 95,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            },
            {
                "name": "Glace",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Isograisse",
            "slug": "Isograisse"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Otaria",
            "pokedexIdd": 86
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 88,
        "pokedexId": 88,
        "name": "Tadmorv",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        "slug": "Tadmorv",
        "HP": 80,
        "attack": 80,
        "defense": 50,
        "special_attack": 40,
        "special_defense": 50,
        "speed": 25,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Grotadmorv",
                "pokedexId": 89
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 89,
        "pokedexId": 89,
        "name": "Grotadmorv",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        "slug": "Grotadmorv",
        "HP": 105,
        "attack": 105,
        "defense": 75,
        "special_attack": 65,
        "special_defense": 100,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Tadmorv",
            "pokedexIdd": 88
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 90,
        "pokedexId": 90,
        "name": "Kokiyas",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        "slug": "Kokiyas",
        "HP": 30,
        "attack": 65,
        "defense": 100,
        "special_attack": 45,
        "special_defense": 25,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Crustabri",
                "pokedexId": 91
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 91,
        "pokedexId": 91,
        "name": "Crustabri",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "slug": "Crustabri",
        "HP": 50,
        "attack": 95,
        "defense": 180,
        "special_attack": 85,
        "special_defense": 45,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            },
            {
                "name": "Glace",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Kokiyas",
            "pokedexIdd": 90
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 92,
        "pokedexId": 92,
        "name": "Fantominus",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "slug": "Fantominus",
        "HP": 30,
        "attack": 35,
        "defense": 30,
        "special_attack": 100,
        "special_defense": 35,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Spectre",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Lévitation",
            "slug": "Levitation"
        },
        "apiEvolutions": [
            {
                "name": "Spectrum",
                "pokedexId": 93
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 93,
        "pokedexId": 93,
        "name": "Spectrum",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        "slug": "Spectrum",
        "HP": 45,
        "attack": 50,
        "defense": 45,
        "special_attack": 115,
        "special_defense": 55,
        "speed": 95,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Spectre",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Lévitation",
            "slug": "Levitation"
        },
        "apiEvolutions": [
            {
                "name": "Ectoplasma",
                "pokedexId": 94
            }
        ],
        "apiPreEvolution": {
            "name": "Fantominus",
            "pokedexIdd": 92
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 94,
        "pokedexId": 94,
        "name": "Ectoplasma",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "slug": "Ectoplasma",
        "HP": 60,
        "attack": 65,
        "defense": 60,
        "special_attack": 130,
        "special_defense": 75,
        "speed": 110,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            },
            {
                "name": "Spectre",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/a/ab/Ghost.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Spectrum",
            "pokedexIdd": 93
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 95,
        "pokedexId": 95,
        "name": "Onix",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        "slug": "Onix",
        "HP": 35,
        "attack": 45,
        "defense": 160,
        "special_attack": 30,
        "special_defense": 45,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Steelix",
                "pokedexId": 208
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 96,
        "pokedexId": 96,
        "name": "Soporifik",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        "slug": "Soporifik",
        "HP": 60,
        "attack": 48,
        "defense": 45,
        "special_attack": 43,
        "special_defense": 90,
        "speed": 42,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Hypnomade",
                "pokedexId": 97
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 97,
        "pokedexId": 97,
        "name": "Hypnomade",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        "slug": "Hypnomade",
        "HP": 85,
        "attack": 73,
        "defense": 70,
        "special_attack": 73,
        "special_defense": 115,
        "speed": 67,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Soporifik",
            "pokedexIdd": 96
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 98,
        "pokedexId": 98,
        "name": "Krabby",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        "slug": "Krabby",
        "HP": 30,
        "attack": 105,
        "defense": 90,
        "special_attack": 25,
        "special_defense": 25,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Krabboss",
                "pokedexId": 99
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 99,
        "pokedexId": 99,
        "name": "Krabboss",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        "slug": "Krabboss",
        "HP": 55,
        "attack": 130,
        "defense": 115,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 75,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Krabby",
            "pokedexIdd": 98
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 100,
        "pokedexId": 100,
        "name": "Voltorbe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        "slug": "Voltorbe",
        "HP": 40,
        "attack": 30,
        "defense": 50,
        "special_attack": 55,
        "special_defense": 55,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Électrode",
                "pokedexId": 101
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 101,
        "pokedexId": 101,
        "name": "Électrode",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        "slug": "Electrode",
        "HP": 60,
        "attack": 50,
        "defense": 70,
        "special_attack": 80,
        "special_defense": 80,
        "speed": 150,
        "apiTypes": [
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Voltorbe",
            "pokedexIdd": 100
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 102,
        "pokedexId": 102,
        "name": "Noeunoeuf",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        "slug": "Noeunoeuf",
        "HP": 60,
        "attack": 40,
        "defense": 80,
        "special_attack": 60,
        "special_defense": 45,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            },
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Noadkoko",
                "pokedexId": 103
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 103,
        "pokedexId": 103,
        "name": "Noadkoko",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        "slug": "Noadkoko",
        "HP": 95,
        "attack": 95,
        "defense": 85,
        "special_attack": 125,
        "special_defense": 75,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            },
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Noeunoeuf",
            "pokedexIdd": 102
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 104,
        "pokedexId": 104,
        "name": "Osselait",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        "slug": "Osselait",
        "HP": 50,
        "attack": 50,
        "defense": 95,
        "special_attack": 40,
        "special_defense": 50,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": [
            {
                "name": "Ossatueur",
                "pokedexId": 105
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 105,
        "pokedexId": 105,
        "name": "Ossatueur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        "slug": "Ossatueur",
        "HP": 60,
        "attack": 80,
        "defense": 110,
        "special_attack": 50,
        "special_defense": 80,
        "speed": 45,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Osselait",
            "pokedexIdd": 104
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 106,
        "pokedexId": 106,
        "name": "Kicklee",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        "slug": "Kicklee",
        "HP": 50,
        "attack": 120,
        "defense": 53,
        "special_attack": 35,
        "special_defense": 110,
        "speed": 87,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Debugant",
            "pokedexIdd": 236
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 107,
        "pokedexId": 107,
        "name": "Tygnon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        "slug": "Tygnon",
        "HP": 50,
        "attack": 105,
        "defense": 79,
        "special_attack": 35,
        "special_defense": 110,
        "speed": 76,
        "apiTypes": [
            {
                "name": "Combat",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fighting.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Debugant",
            "pokedexIdd": 236
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 108,
        "pokedexId": 108,
        "name": "Excelangue",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        "slug": "Excelangue",
        "HP": 90,
        "attack": 55,
        "defense": 75,
        "special_attack": 60,
        "special_defense": 75,
        "speed": 30,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Coudlangue",
                "pokedexId": 463
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 109,
        "pokedexId": 109,
        "name": "Smogo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        "slug": "Smogo",
        "HP": 40,
        "attack": 65,
        "defense": 95,
        "special_attack": 60,
        "special_defense": 45,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Lévitation",
            "slug": "Levitation"
        },
        "apiEvolutions": [
            {
                "name": "Smogogo",
                "pokedexId": 110
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 110,
        "pokedexId": 110,
        "name": "Smogogo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        "slug": "Smogogo",
        "HP": 65,
        "attack": 90,
        "defense": 120,
        "special_attack": 85,
        "special_defense": 70,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Poison",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Lévitation",
            "slug": "Levitation"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Smogo",
            "pokedexIdd": 109
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 111,
        "pokedexId": 111,
        "name": "Rhinocorne",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        "slug": "Rhinocorne",
        "HP": 80,
        "attack": 85,
        "defense": 95,
        "special_attack": 30,
        "special_defense": 30,
        "speed": 25,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": [
            {
                "name": "Rhinoféros",
                "pokedexId": 112
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 112,
        "pokedexId": 112,
        "name": "Rhinoféros",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        "slug": "Rhinoferos",
        "HP": 105,
        "attack": 130,
        "defense": 120,
        "special_attack": 45,
        "special_defense": 45,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Sol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/8/8f/Ground.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": [
            {
                "name": "Rhinastoc",
                "pokedexId": 464
            }
        ],
        "apiPreEvolution": {
            "name": "Rhinocorne",
            "pokedexIdd": 111
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 113,
        "pokedexId": 113,
        "name": "Leveinard",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        "slug": "Leveinard",
        "HP": 250,
        "attack": 5,
        "defense": 5,
        "special_attack": 35,
        "special_defense": 105,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Leuphorie",
                "pokedexId": 242
            }
        ],
        "apiPreEvolution": {
            "name": "Ptiravi",
            "pokedexIdd": 440
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 114,
        "pokedexId": 114,
        "name": "Saquedeneu",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        "slug": "Saquedeneu",
        "HP": 65,
        "attack": 55,
        "defense": 115,
        "special_attack": 100,
        "special_defense": 40,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Plante",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Bouldeneu",
                "pokedexId": 465
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 115,
        "pokedexId": 115,
        "name": "Kangourex",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        "slug": "Kangourex",
        "HP": 105,
        "attack": 95,
        "defense": 80,
        "special_attack": 40,
        "special_defense": 80,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 116,
        "pokedexId": 116,
        "name": "Hypotrempe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        "slug": "Hypotrempe",
        "HP": 30,
        "attack": 40,
        "defense": 70,
        "special_attack": 70,
        "special_defense": 25,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Hypocéan",
                "pokedexId": 117
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 117,
        "pokedexId": 117,
        "name": "Hypocéan",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        "slug": "Hypocean",
        "HP": 55,
        "attack": 65,
        "defense": 95,
        "special_attack": 95,
        "special_defense": 45,
        "speed": 85,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Hyporoi",
                "pokedexId": 230
            }
        ],
        "apiPreEvolution": {
            "name": "Hypotrempe",
            "pokedexIdd": 116
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 118,
        "pokedexId": 118,
        "name": "Poissirène",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        "slug": "Poissirene",
        "HP": 45,
        "attack": 67,
        "defense": 60,
        "special_attack": 35,
        "special_defense": 50,
        "speed": 63,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": [
            {
                "name": "Poissoroy",
                "pokedexId": 119
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 119,
        "pokedexId": 119,
        "name": "Poissoroy",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        "slug": "Poissoroy",
        "HP": 80,
        "attack": 92,
        "defense": 65,
        "special_attack": 65,
        "special_defense": 80,
        "speed": 68,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Paratonnerre",
            "slug": "Paratonnerre"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Poissirène",
            "pokedexIdd": 118
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 120,
        "pokedexId": 120,
        "name": "Stari",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        "slug": "Stari",
        "HP": 30,
        "attack": 45,
        "defense": 55,
        "special_attack": 70,
        "special_defense": 55,
        "speed": 85,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Staross",
                "pokedexId": 121
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 121,
        "pokedexId": 121,
        "name": "Staross",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        "slug": "Staross",
        "HP": 60,
        "attack": 75,
        "defense": 85,
        "special_attack": 100,
        "special_defense": 85,
        "speed": 115,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            },
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Stari",
            "pokedexIdd": 120
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 122,
        "pokedexId": 122,
        "name": "M. Mime",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        "slug": "M-Mime",
        "HP": 40,
        "attack": 45,
        "defense": 65,
        "special_attack": 100,
        "special_defense": 120,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            },
            {
                "name": "Fée",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/4/43/Fairy.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "M. Glaquette",
                "pokedexId": 866
            }
        ],
        "apiPreEvolution": {
            "name": "Mime Jr.",
            "pokedexIdd": 439
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 123,
        "pokedexId": 123,
        "name": "Insécateur",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        "slug": "Insecateur",
        "HP": 70,
        "attack": 110,
        "defense": 80,
        "special_attack": 55,
        "special_defense": 80,
        "speed": 105,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Cizayox",
                "pokedexId": 212
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 124,
        "pokedexId": 124,
        "name": "Lippoutou",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        "slug": "Lippoutou",
        "HP": 65,
        "attack": 50,
        "defense": 35,
        "special_attack": 115,
        "special_defense": 95,
        "speed": 95,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            },
            {
                "name": "Glace",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Peau Sèche",
            "slug": "Peau-Seche"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Lippouti",
            "pokedexIdd": 238
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 125,
        "pokedexId": 125,
        "name": "Élektek",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        "slug": "Elektek",
        "HP": 65,
        "attack": 83,
        "defense": 57,
        "special_attack": 95,
        "special_defense": 85,
        "speed": 105,
        "apiTypes": [
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Élekable",
                "pokedexId": 466
            }
        ],
        "apiPreEvolution": {
            "name": "Élekid",
            "pokedexIdd": 239
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 126,
        "pokedexId": 126,
        "name": "Magmar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        "slug": "Magmar",
        "HP": 65,
        "attack": 95,
        "defense": 57,
        "special_attack": 100,
        "special_defense": 85,
        "speed": 93,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Maganon",
                "pokedexId": 467
            }
        ],
        "apiPreEvolution": {
            "name": "Magby",
            "pokedexIdd": 240
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 127,
        "pokedexId": 127,
        "name": "Scarabrute",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        "slug": "Scarabrute",
        "HP": 65,
        "attack": 125,
        "defense": 100,
        "special_attack": 55,
        "special_defense": 70,
        "speed": 85,
        "apiTypes": [
            {
                "name": "Insecte",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7d/Bug.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 128,
        "pokedexId": 128,
        "name": "Tauros",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        "slug": "Tauros",
        "HP": 75,
        "attack": 100,
        "defense": 95,
        "special_attack": 40,
        "special_defense": 70,
        "speed": 110,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 129,
        "pokedexId": 129,
        "name": "Magicarpe",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        "slug": "Magicarpe",
        "HP": 20,
        "attack": 10,
        "defense": 55,
        "special_attack": 15,
        "special_defense": 20,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Léviator",
                "pokedexId": 130
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 130,
        "pokedexId": 130,
        "name": "Léviator",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        "slug": "Leviator",
        "HP": 95,
        "attack": 125,
        "defense": 79,
        "special_attack": 60,
        "special_defense": 100,
        "speed": 81,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Magicarpe",
            "pokedexIdd": 129
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 131,
        "pokedexId": 131,
        "name": "Lokhlass",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        "slug": "Lokhlass",
        "HP": 130,
        "attack": 85,
        "defense": 80,
        "special_attack": 85,
        "special_defense": 95,
        "speed": 60,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            },
            {
                "name": "Glace",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Absorbe-Eau",
            "slug": "Absorbe-Eau"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 132,
        "pokedexId": 132,
        "name": "Métamorph",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "slug": "Metamorph",
        "HP": 48,
        "attack": 48,
        "defense": 48,
        "special_attack": 48,
        "special_defense": 48,
        "speed": 48,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 133,
        "pokedexId": 133,
        "name": "Évoli",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "slug": "Evoli",
        "HP": 55,
        "attack": 55,
        "defense": 50,
        "special_attack": 45,
        "special_defense": 65,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Aquali",
                "pokedexId": 134
            },
            {
                "name": "Voltali",
                "pokedexId": 135
            },
            {
                "name": "Pyroli",
                "pokedexId": 136
            },
            {
                "name": "Mentali",
                "pokedexId": 196
            },
            {
                "name": "Noctali",
                "pokedexId": 197
            },
            {
                "name": "Phyllali",
                "pokedexId": 470
            },
            {
                "name": "Givrali",
                "pokedexId": 471
            },
            {
                "name": "Nymphali",
                "pokedexId": 700
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 134,
        "pokedexId": 134,
        "name": "Aquali",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "slug": "Aquali",
        "HP": 130,
        "attack": 65,
        "defense": 60,
        "special_attack": 110,
        "special_defense": 95,
        "speed": 65,
        "apiTypes": [
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Absorbe-Eau",
            "slug": "Absorbe-Eau"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Évoli",
            "pokedexIdd": 133
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 135,
        "pokedexId": 135,
        "name": "Voltali",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        "slug": "Voltali",
        "HP": 65,
        "attack": 65,
        "defense": 60,
        "special_attack": 110,
        "special_defense": 95,
        "speed": 130,
        "apiTypes": [
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Absorbe-Volt",
            "slug": "Absorbe-Volt"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Évoli",
            "pokedexIdd": 133
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 136,
        "pokedexId": 136,
        "name": "Pyroli",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        "slug": "Pyroli",
        "HP": 65,
        "attack": 130,
        "defense": 60,
        "special_attack": 95,
        "special_defense": 110,
        "speed": 65,
        "apiTypes": [
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Torche",
            "slug": "Torche"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Évoli",
            "pokedexIdd": 133
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 137,
        "pokedexId": 137,
        "name": "Porygon",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        "slug": "Porygon",
        "HP": 65,
        "attack": 60,
        "defense": 70,
        "special_attack": 85,
        "special_defense": 75,
        "speed": 40,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Porygon2",
                "pokedexId": 233
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 138,
        "pokedexId": 138,
        "name": "Amonita",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        "slug": "Amonita",
        "HP": 35,
        "attack": 40,
        "defense": 100,
        "special_attack": 90,
        "special_defense": 55,
        "speed": 35,
        "apiTypes": [
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Amonistar",
                "pokedexId": 139
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 139,
        "pokedexId": 139,
        "name": "Amonistar",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        "slug": "Amonistar",
        "HP": 70,
        "attack": 60,
        "defense": 125,
        "special_attack": 115,
        "special_defense": 70,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Amonita",
            "pokedexIdd": 138
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 140,
        "pokedexId": 140,
        "name": "Kabuto",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        "slug": "Kabuto",
        "HP": 30,
        "attack": 80,
        "defense": 90,
        "special_attack": 55,
        "special_defense": 45,
        "speed": 55,
        "apiTypes": [
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Kabutops",
                "pokedexId": 141
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 141,
        "pokedexId": 141,
        "name": "Kabutops",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        "slug": "Kabutops",
        "HP": 60,
        "attack": 115,
        "defense": 105,
        "special_attack": 65,
        "special_defense": 70,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            },
            {
                "name": "Eau",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/9/9d/Water.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Kabuto",
            "pokedexIdd": 140
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 142,
        "pokedexId": 142,
        "name": "Ptéra",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        "slug": "Ptera",
        "HP": 80,
        "attack": 105,
        "defense": 65,
        "special_attack": 60,
        "special_defense": 75,
        "speed": 130,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Roche",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/0/0b/Rock.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 143,
        "pokedexId": 143,
        "name": "Ronflex",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        "slug": "Ronflex",
        "HP": 160,
        "attack": 110,
        "defense": 65,
        "special_attack": 65,
        "special_defense": 110,
        "speed": 30,
        "apiTypes": [
            {
                "name": "Normal",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/f/fb/Normal.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
            "name": "Isograisse",
            "slug": "Isograisse"
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Goinfrex",
            "pokedexIdd": 446
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 144,
        "pokedexId": 144,
        "name": "Artikodin",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        "slug": "Artikodin",
        "HP": 90,
        "attack": 85,
        "defense": 100,
        "special_attack": 95,
        "special_defense": 125,
        "speed": 85,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Glace",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/77/Ice.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Feu",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 145,
        "pokedexId": 145,
        "name": "Électhor",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        "slug": "Electhor",
        "HP": 90,
        "attack": 90,
        "defense": 85,
        "special_attack": 125,
        "special_defense": 90,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Électrik",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/2f/Electric.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 146,
        "pokedexId": 146,
        "name": "Sulfura",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        "slug": "Sulfura",
        "HP": 90,
        "attack": 100,
        "defense": 90,
        "special_attack": 125,
        "special_defense": 85,
        "speed": 90,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Feu",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 147,
        "pokedexId": 147,
        "name": "Minidraco",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        "slug": "Minidraco",
        "HP": 41,
        "attack": 64,
        "defense": 45,
        "special_attack": 50,
        "special_defense": 50,
        "speed": 50,
        "apiTypes": [
            {
                "name": "Dragon",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Draco",
                "pokedexId": 148
            }
        ],
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 148,
        "pokedexId": 148,
        "name": "Draco",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        "slug": "Draco",
        "HP": 61,
        "attack": 84,
        "defense": 65,
        "special_attack": 70,
        "special_defense": 70,
        "speed": 70,
        "apiTypes": [
            {
                "name": "Dragon",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": [
            {
                "name": "Dracolosse",
                "pokedexId": 149
            }
        ],
        "apiPreEvolution": {
            "name": "Minidraco",
            "pokedexIdd": 147
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 149,
        "pokedexId": 149,
        "name": "Dracolosse",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        "slug": "Dracolosse",
        "HP": 91,
        "attack": 134,
        "defense": 95,
        "special_attack": 100,
        "special_defense": 100,
        "speed": 80,
        "apiTypes": [
            {
                "name": "Vol",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png"
            },
            {
                "name": "Dragon",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c7/Dragon.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 0,
                "damage_relation": "immune"
            },
            {
                "name": "Roche",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Eau",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Plante",
                "damage_multiplier": 0.25,
                "damage_relation": "twice_resistant"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Glace",
                "damage_multiplier": 4,
                "damage_relation": "twice_vulnerable"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Fée",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": {
            "name": "Draco",
            "pokedexIdd": 148
        },
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 150,
        "pokedexId": 150,
        "name": "Mewtwo",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "slug": "Mewtwo",
        "HP": 106,
        "attack": 110,
        "defense": 90,
        "special_attack": 154,
        "special_defense": 90,
        "speed": 130,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    },
    {
        "id": 151,
        "pokedexId": 151,
        "name": "Mew",
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
        "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        "slug": "Mew",
        "HP": 100,
        "attack": 100,
        "defense": 100,
        "special_attack": 100,
        "special_defense": 100,
        "speed": 100,
        "apiTypes": [
            {
                "name": "Psy",
                "image": "https://static.wikia.nocookie.net/pokemongo/images/2/21/Psychic.png"
            }
        ],
        "apiGeneration": 1,
        "apiResistances": [
            {
                "name": "Normal",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Combat",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Vol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Poison",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Sol",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Roche",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Insecte",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Spectre",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Acier",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Feu",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Eau",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Plante",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Électrik",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Psy",
                "damage_multiplier": 0.5,
                "damage_relation": "resistant"
            },
            {
                "name": "Glace",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Dragon",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            },
            {
                "name": "Ténèbres",
                "damage_multiplier": 2,
                "damage_relation": "vulnerable"
            },
            {
                "name": "Fée",
                "damage_multiplier": 1,
                "damage_relation": "neutral"
            }
        ],
        "resistanceModifyingAbilitiesForApi": {
        },
        "apiEvolutions": {
        },
        "apiPreEvolution": "none",
        "apiResistancesWithAbilities": {
        }
    }
]

module.exports = {
    users,
    pokemons,
}