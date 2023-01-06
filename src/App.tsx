import styles from './App.module.scss'
import { Header } from './features/Header'
import { Pokedex } from './features/Pokedex'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PokemonDetail } from './features/PokemonDetail/PokemonDetail'
import { LoadingProvider, useLoading } from './context/loadingContext'
import { LoadingSpinner } from './components/LoadingSpinner'

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Pokedex />,
        },
        {
            path: ':pokemonName',
            element: <PokemonDetail />,
        },
    ],
    {
        basename: '/pokedex-react',
    }
)

export const App: React.FC = () => {
    const { isLoading } = useLoading()

    return (
        <>
            <div className={styles.app}>
                <Header />
                <RouterProvider router={router} />
            </div>
            <LoadingSpinner show={isLoading} />
        </>
    )
}
