import { Link } from 'react-router-dom'
import { Pokemon } from '../../types/pokemon'
import styles from './PokemonItem.module.scss'

export const PokemonItem: React.FC<Pokemon> = ({ id, imageSrc, name, types }) => {
    return (
        <Link to={name} className={styles.card}>
            <div className={styles.item}>
                <div className={styles.id}>#{id}</div>
                <div className="image">
                    <img src={imageSrc} />
                </div>
                <div className={styles.name}>{name}</div>
                <div className={styles.types}>{types.join(', ')}</div>
            </div>
        </Link>
    )
}
