import styles from './App.module.scss'
import { Header } from './features/Header'
import { Pokedex } from './features/Pokedex'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PokemonDetail } from './features/PokemonDetail/PokemonDetail'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Pokedex />,
    },
    {
        path: ':pokemonName',
        element: <PokemonDetail />,
    },
])

export const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <RouterProvider router={router} />
        </div>
    )
}
