import { useCallback, useEffect, useState } from 'react'
import { PokedexResult } from '../types/pokemon'
import { get } from './api'

export const usePokedexApi = () => {
    const [pokedexResult, setPokedexResult] = useState<PokedexResult>()
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState<string>()

    const disableLoading = useCallback(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [setLoading])

    useEffect(() => {
        setLoading(true)
        get(url)
            .then((result) => setPokedexResult(result))
            .finally(() => disableLoading())
    }, [url])

    return {
        pokedex: pokedexResult?.pokedex,
        isFetching: loading,
        hasPrevious: Boolean(pokedexResult?.previous),
        hasNext: Boolean(pokedexResult?.next),
        fetchPrevious: () => setUrl(pokedexResult?.previous),
        fetchNext: () => setUrl(pokedexResult?.next),
    }
}
