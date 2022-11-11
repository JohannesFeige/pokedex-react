import { useCallback, useEffect, useState } from 'react'
import { useLoading } from '../context/loadingContext'
import { PokedexResult } from '../types/pokemon'
import { get } from './pokedexApi'

export const usePokedexApi = () => {
    const [pokedexResult, setPokedexResult] = useState<PokedexResult>()
    const [url, setUrl] = useState<string>()
    const { startLoading, stopLoading } = useLoading()

    const disableLoading = useCallback(() => {
        setTimeout(() => {
            stopLoading()
        }, 200)
    }, [stopLoading])

    useEffect(() => {
        startLoading()
        get(url)
            .then((result) => setPokedexResult(result))
            .finally(() => disableLoading())
    }, [url])

    return {
        pokedex: pokedexResult?.pokedex,
        hasPrevious: Boolean(pokedexResult?.previous),
        hasNext: Boolean(pokedexResult?.next),
        fetchPrevious: () => setUrl(pokedexResult?.previous),
        fetchNext: () => setUrl(pokedexResult?.next),
    }
}
