import { Button } from '../../components/Button'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import styles from './Pokedex.module.scss'
import { PokemonItem } from './PokemonItem'
import { usePokedexApi } from '../../hooks/usePokedexApi'
import { Pokemon } from '../../types/pokemon'

// TODO: following variables should come from a custom hook:
const pokedex: Pokemon[] = []
const isFetching = false
const hasNext = false
const hasPrevious = false
const fetchNext = () => {}
const fetchPrevious = () => {}

export const Pokedex: React.FC = () => {
    return (
        <>
            <div className={styles.pokedex}>
                {pokedex?.map((pokemon) => (
                    <PokemonItem key={pokemon.id} {...pokemon} />
                ))}
            </div>
            <div>
                <Button disabled={!hasPrevious} onClick={fetchPrevious}>
                    Previous
                </Button>
                <Button disabled={!hasNext} onClick={fetchNext}>
                    Next
                </Button>
            </div>
            <LoadingSpinner show={isFetching} />
        </>
    )
}
