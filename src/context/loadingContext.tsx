import { createContext, PropsWithChildren, useContext, useState } from 'react'

type LoadingContextType = {
    isLoading: boolean
    startLoading: () => void
    stopLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | null>(null)

const useLoading = () => useContext(LoadingContext) as LoadingContextType

const LoadingProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const startLoading = () => setLoading(true)
    const stopLoading = () => setLoading(false)

    return <LoadingContext.Provider value={{ isLoading: loading, startLoading, stopLoading }}>{children}</LoadingContext.Provider>
}

export { LoadingProvider, useLoading }
