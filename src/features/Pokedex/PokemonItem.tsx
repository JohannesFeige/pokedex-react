import { Pokemon } from '../../types/pokemon'
import styles from './PokemonItem.module.scss'

// todo: how do you get the props?
export const PokemonItem: React.FC<Pokemon> = () => {
    return (
        <div className={styles.card}>
            <div className={styles.item}>
                <div className={styles.id}>{/* todo: id goes here */}</div>
                <div className="image">{/* todo: lets render the image from imageSrc */}</div>
                <div className={styles.name}>{/* todo: name goes here */}</div>
                <div className={styles.types}>{/* todo: types goes here */}</div>
            </div>
        </div>
    )
}
