import styles from './App.module.scss'
import { Header } from './features/Header'
import { Pokedex } from './features/Pokedex'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PokemonDetail } from './features/PokemonDetail/PokemonDetail'

// todo: lets define the router (https://reactrouter.com/en/main/start/tutorial)
// - / -> Pokedex
// - :pokemonName -> PokemonDetail -> start with a dummy component for that

export const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            {/* render RouterProvider here */}
        </div>
    )
}
