import styles from './App.module.scss'
import { Header } from './features/Header'
import { Pokedex } from './features/Pokedex'

export const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Pokedex />
        </div>
    )
}
