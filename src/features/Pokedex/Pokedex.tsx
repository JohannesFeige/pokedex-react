import { useCallback, useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { PokedexResult } from '../../types/pokemon'
import { get } from './api'
import styles from './Pokedex.module.scss'
import { PokemonItem } from './PokemonItem'

export const Pokedex: React.FC = () => {
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

    return (
        <>
            <div className={styles.pokedex}>
                {pokedexResult?.pokedex.map((pokemon) => (
                    <PokemonItem key={pokemon.id} {...pokemon} />
                ))}
            </div>
            <div>
                <Button disabled={!Boolean(pokedexResult?.previous)} onClick={() => setUrl(pokedexResult?.previous)}>
                    Previous
                </Button>
                <Button disabled={!Boolean(pokedexResult?.next)} onClick={() => setUrl(pokedexResult?.next)}>
                    Next
                </Button>
            </div>
            <LoadingSpinner show={loading} />
        </>
    )
}
