import { useParams } from 'react-router-dom'
import { usePokemonDetailApi } from '../../hooks/usePokemonDetailApi'

export const PokemonDetail: React.FC = () => {
    const { pokemonName } = useParams()
    const { pokemon, isFetching } = usePokemonDetailApi(pokemonName)

    return (
        <div style={{ textAlign: 'left' }}>
            <span>PokemonDetail </span>
            <pre>{JSON.stringify(pokemon, null, 2)}</pre>
        </div>
    )
}
