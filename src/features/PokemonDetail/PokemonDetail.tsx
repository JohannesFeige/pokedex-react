import { useParams } from 'react-router-dom'
import { usePokemonQuery } from '../../api/pokemonApi'
import { LinkButton } from '../../components/LinkButton'
import styles from './PokemonDetail.module.scss'
import { PokemonType } from './PokemonType'
import { Stat } from './Stat'

export const PokemonDetail: React.FC = () => {
    const { pokemonName } = useParams()
    const { data: pokemon } = usePokemonQuery(pokemonName!)

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
                        <LinkButton to={`../${pokemon.id - 1}`} disabled={pokemon.id === 1}>
                            &laquo; Previous
                        </LinkButton>
                        <LinkButton to="..">Overview</LinkButton>
                        <LinkButton to={`../${pokemon.id + 1}`}>Next &raquo;</LinkButton>
                    </div>
                </div>
            )}
        </>
    )
}
