import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './features/Header/Header';

export const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
        </div>
    );
};
