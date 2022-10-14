import { PokemonResponse } from '../types/api'
import { Pokemon, PokemonDetail } from '../types/pokemon'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const get = async (name: string): Promise<PokemonDetail> => {
    const pokemonUrl = `${baseUrl}${name}`
    const data = await fetch(pokemonUrl)
    const rawPokemon: PokemonResponse = await data.json()

    const pokemon: Pokemon = {
        id: rawPokemon.id,
        name: rawPokemon.name,
        types: rawPokemon.types.map((x) => x.type.name),
        imageSrc: rawPokemon.sprites.other['official-artwork'].front_default,
    }

    return pokemon
}
