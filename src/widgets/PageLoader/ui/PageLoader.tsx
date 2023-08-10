import { FC } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
    label?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className, label }) => {
    return (
        <div className={cn(styles.PageLoader, {}, [className])}>
            <Loader label={label} />
        </div>
    )
}
