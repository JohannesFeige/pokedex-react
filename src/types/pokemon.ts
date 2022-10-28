export type Pokemon = {
    id: number
    name: string
    types: string[]
    imageSrc: string
}

export type PokemonDetail = {
    stats: {
        name: string
        value: number
    }[]
} & Pokemon

export type PokedexResult = {
    pokedex: Pokemon[]
    next?: string
    previous?: string
}
