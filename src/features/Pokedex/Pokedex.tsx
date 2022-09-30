import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '../../components/Button'
import { PokedexResult } from '../../types/pokemon'
import { get } from './api'
import styles from './Pokedex.module.scss'
import { PokemonItem } from './PokemonItem'

export const Pokedex: React.FC = () => {
    const [pokedexResult, setPokedexResult] = useState<PokedexResult>()

    useEffect(() => {
        get().then((result) => setPokedexResult(result))
    }, [])

    const buttonClickHandler = (url?: string) => {
        get(url).then((result) => setPokedexResult(result))
    }

    return (
        <>
            <div className={styles.pokedex}>
                {pokedexResult?.pokedex.map((pokemon) => (
                    <PokemonItem key={pokemon.id} {...pokemon} />
                ))}
            </div>
            <div>
                <Button disabled={!Boolean(pokedexResult?.previous)} onClick={() => buttonClickHandler(pokedexResult?.previous)}>
                    Previous
                </Button>
                <Button disabled={!Boolean(pokedexResult?.next)} onClick={() => buttonClickHandler(pokedexResult?.next)}>
                    Next
                </Button>
            </div>
        </>
    )
}
