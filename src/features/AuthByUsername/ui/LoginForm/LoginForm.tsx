import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { FC } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    return (
        <div className={cn(styles.LoginForm, {}, [className])}>
            <Input label="Логин" autoFocus />
            <Input label="Пароль" />
            <div className={styles.controllers}>
                <Button variant={ButtonVariant.OUTLINE} fullWidth>
                    Войти
                </Button>
            </div>
        </div>
    )
}
