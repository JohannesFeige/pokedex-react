import styles from './LoadingSpinner.module.scss'

export type LoadingSpinnerProps = {
    show: boolean
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ show }) => {
    if (!show) {
        return null
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <span className={styles.spinner}></span>
                </div>
            </div>
        </div>
    )
}
