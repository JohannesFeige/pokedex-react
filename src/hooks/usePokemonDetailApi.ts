import { useCallback, useEffect, useState } from 'react'
import { useLoading } from '../context/loadingContext'
import { PokemonDetail } from '../types/pokemon'
import { get } from './pokemonDetailApi'

export const usePokemonDetailApi = (pokemonName?: string) => {
    const [pokemon, setPokemon] = useState<PokemonDetail>()
    const { startLoading, stopLoading } = useLoading()

    const disableLoading = useCallback(() => {
        setTimeout(() => {
            stopLoading()
        }, 200)
    }, [stopLoading])

    useEffect(() => {
        if (!pokemonName) {
            return
        }

        startLoading()
        get(pokemonName)
            .then((result) => setPokemon(result))
            .finally(() => disableLoading())
    }, [pokemonName])

    return {
        pokemon: pokemon,
    }
}
