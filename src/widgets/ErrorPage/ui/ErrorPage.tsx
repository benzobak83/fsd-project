import { Button } from 'shared/ui/Button/Button'
import {FC} from 'react'
import {cn} from 'shared/lib/classNames/classNames'
import styles from './ErrorPage.module.scss'

interface ErrorPageProps {
   className?: string
}

export const ErrorPage:FC<ErrorPageProps> = ({className}) => {

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={cn(styles.ErrorPage, {}, [className])}>
            <div className={styles.errorText}>Произошла ошибка</div>
            <Button className={styles.errorИет} onClick={reloadPage}>
                Перезагрузить страницу
            </Button>
        </div>
    )
}
