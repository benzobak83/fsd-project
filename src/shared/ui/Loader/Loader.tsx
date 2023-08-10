import { FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './Loader.module.scss'

interface LoaderProps {
    className?: string
    label?: string
}

export const Loader: FC<LoaderProps> = ({ className, label }) => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={cn(styles.Loader, {}, [className])}></div>
            {label && <div>{label}</div>}
        </div>
    )
}
