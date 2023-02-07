import { useCallback, useState } from 'react'
import { Button } from '../../components/Button'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { PokedexResult } from '../../types/pokemon'
import styles from './Pokedex.module.scss'

export const Pokedex: React.FC = () => {
    const [pokedexResult, setPokedexResult] = useState<PokedexResult>()
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState<string>()

    const disableLoading = useCallback(() => {
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [setLoading])

    // todo: every time the url changes (even on the first render - url is undefined there)
    // - start loading animation
    // - request the pokemon via { get } from api
    // - then save the pokedexResult for the next render cycle
    // - finally disable the loading animation
    // - oh, did I mentioned that this should be done every time the url changes?

    return (
        <>
            <div className={styles.pokedex}>{/* todo: lets render a <PokemonItem /> for every entry in the pokedexResult */}</div>
            <div>
                {/* todo: when should the button be disabled? what should happen onClick? */}
                <Button disabled={false} onClick={() => {}}>
                    Previous
                </Button>
                <Button disabled={false} onClick={() => {}}>
                    Next
                </Button>
            </div>
            <LoadingSpinner show={loading} />
        </>
    )
}
