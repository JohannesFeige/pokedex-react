import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { appStore } from './appStore'
import { LoadingProvider } from './context/loadingContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <LoadingProvider>
            <Provider store={appStore}>
                <App />
            </Provider>
        </LoadingProvider>
    </React.StrictMode>
)
