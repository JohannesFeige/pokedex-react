import { useCallback, useEffect, useState } from 'react'
import { PokemonDetail } from '../types/pokemon'
import { get } from './pokemonDetailApi'

export const usePokemonDetailApi = (pokemonName?: string) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>()
    const [loading, setLoading] = useState(false)

    const disableLoading = useCallback(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [setLoading])

    useEffect(() => {
        if (!pokemonName) {
            return
        }

        setLoading(true)
        get(pokemonName)
            .then((result) => setPokemon(result))
            .finally(() => disableLoading())
    }, [pokemonName])

    return {
        pokemon: pokemon,
        isFetching: loading,
    }
}
