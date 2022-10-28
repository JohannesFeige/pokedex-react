import styles from './PokemonType.module.scss'

export const PokemonType: React.FC<{ type: string }> = ({ type }) => {
    return <div className={styles[type]}>{type}</div>
}
