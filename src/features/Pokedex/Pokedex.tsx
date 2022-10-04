import { Button } from '../../components/Button'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import styles from './Pokedex.module.scss'
import { PokemonItem } from './PokemonItem'
import { usePokedexApi } from '../../hooks/usePokedexApi'

export const Pokedex: React.FC = () => {
    const { pokedex, isFetching, hasNext, hasPrevious, fetchNext, fetchPrevious } = usePokedexApi()

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
