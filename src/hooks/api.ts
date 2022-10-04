import { PokemonListResponse, PokemonResponse } from '../types/api'
import { PokedexResult, Pokemon } from '../types/pokemon'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const get = async (url?: string): Promise<PokedexResult> => {
    const data = await fetch(url ?? baseUrl)
    const rawList: PokemonListResponse = await data.json()

    const pokedex = await Promise.all(rawList.results.map((x) => enrichPokemon({ url: x.url })))

    return {
        pokedex,
        next: rawList.next,
        previous: rawList.previous,
    }
}

const enrichPokemon = async ({ id, url }: { id?: number; url?: string }): Promise<Pokemon> => {
    const pokemonUrl = url ?? `${baseUrl}${id}`
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
