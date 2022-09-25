import { useEffect, useState } from 'react'
import { PokedexResult } from '../../types/pokemon'
import { get } from './api'

export const Pokedex: React.FC = () => {
    const [pokedex, setPokedex] = useState<PokedexResult>()

    useEffect(() => {
        get().then((result) => setPokedex(result))
    }, [])

    return (
        <>
            <div>Pokedex</div>
            <pre>{JSON.stringify(pokedex, null, 2)}</pre>
        </>
    )
}
