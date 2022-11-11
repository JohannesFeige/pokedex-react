import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { LoadingProvider } from './context/loadingContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LoadingProvider>
            <App />
        </LoadingProvider>
    </React.StrictMode>
)
