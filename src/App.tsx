import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import styles from './App.module.scss'
import { useAppSelector } from './appStore'
import { LoadingSpinner } from './components/LoadingSpinner'
import { useLoading } from './context/loadingContext'
import { Header } from './features/Header'
import { Pokedex } from './features/Pokedex'
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
    const { isLoading } = useLoading()

    const queryPending = useAppSelector((state) => Object.values(state.api.queries).some((query) => query?.status === 'pending'))

    return (
        <>
            <div className={styles.app}>
                <Header />
                <RouterProvider router={router} />
            </div>
            <LoadingSpinner show={isLoading || queryPending} />
        </>
    )
}
