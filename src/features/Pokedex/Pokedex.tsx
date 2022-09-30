import { useEffect, useState } from 'react'
import { PokedexResult } from '../../types/pokemon'
import { get } from './api'
import styles from './Pokedex.module.scss'
import { PokemonItem } from './PokemonItem'

export const Pokedex: React.FC = () => {
    const [pokedexResult, setPokedexResult] = useState<PokedexResult>()

    useEffect(() => {
        get().then((result) => setPokedexResult(result))
    }, [])

    return (
        <div className={styles.pokedex}>
            {pokedexResult?.pokedex.map((pokemon) => (
                <PokemonItem key={pokemon.id} {...pokemon} />
            ))}
        </div>
    )
}
