import styles from './App.module.scss';
import { Header } from './features/Header/Header';
import { Pokedex } from './features/Pokedex/Pokedex';

export const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Header />
            <Pokedex />          
        </div>
    );
};
