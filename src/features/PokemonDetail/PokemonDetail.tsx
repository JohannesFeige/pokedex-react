import { LoadingSpinner } from '../../components/LoadingSpinner'
import { usePokemonDetailApi } from '../../hooks/usePokemonDetailApi'
import styles from './PokemonDetail.module.scss'
import { PokemonType } from './PokemonType'
import { Stat } from './Stat'

export const PokemonDetail: React.FC = () => {
    // where do you get the name of the pokemon from?
    // maybe there is a hook you can use?
    const pokemonName = ''
    const { pokemon, isFetching } = usePokemonDetailApi(pokemonName)

    return (
        <>
            {pokemon && (
                <div style={{ textAlign: 'left' }}>
                    <h1 className={styles.header}>{pokemon.name}</h1>
                    <div>
                        {pokemon.types.map((type) => (
                            <PokemonType key={type} type={type} />
                        ))}
                    </div>
                    <div className={styles.content}>
                        <img src={pokemon.imageSrc} />
                        <div>
                            <span>Base Stat Total: {pokemon.stats.reduce((sum, stat) => sum + stat.value, 0)}</span>
                            {pokemon.stats.map((stat) => (
                                <Stat key={`${pokemonName}-${stat.name}`} {...stat} />
                            ))}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        {/* add three buttons here: previous, overview, next */}
                        {/* use the LinkButton component here // maybe you could find a */}
                        {/* clever way in https://reactrouter.com/en/main/components/link for navigating */}
                    </div>
                </div>
            )}
            <LoadingSpinner show={isFetching} />
        </>
    )
}
