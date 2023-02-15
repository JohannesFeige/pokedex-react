import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import styles from './App.module.scss'
import { useAppSelector } from './appStore'
import { LoadingSpinner } from './components/LoadingSpinner'
import { Header } from './features/Header'
import { Pokedex } from './features/Pokedex'
import { PokemonDetail } from './features/PokemonDetail/PokemonDetail'

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
    const queryPending = useAppSelector((state) => Object.values(state.api.queries).some((query) => query?.status === 'pending'))

    return (
        <>
            <div className={styles.app}>
                <Header />
                <RouterProvider router={router} />
            </div>
            <LoadingSpinner show={queryPending} />
        </>
    )
}
