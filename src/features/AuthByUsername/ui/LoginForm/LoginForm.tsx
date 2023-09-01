import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { FC, useCallback } from 'react'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextColor } from 'shared/ui/Text/Text'
import { cn } from 'shared/lib/classNames/classNames'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginActions } from '../..//model/slice/loginSlice'
import { loginByUsername } from '../..//model/services/loginByUsername/loginByUsername'
import {
    useAppDispatch,
    useAppSelector,
} from 'shared/lib/hooks/useTypedSelectorAndDispatch'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const { password, username, isLoading, error } =
        useAppSelector(getLoginState)

    const onChangeUsername = useCallback(
        (username: string) => {
            dispatch(loginActions.setUsername(username))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (password: string) => {
            dispatch(loginActions.setPassword(password))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={cn(styles.LoginForm, {}, [className])}>
            {!!error && error}
            <Text color={TextColor.ERROR}>fdfd</Text>
            <Input
                label="Логин"
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                label="Пароль"
                onChange={onChangePassword}
                value={password}
            />
            <div className={styles.controllers}>
                <Button
                    variant={ButtonVariant.OUTLINE}
                    fullWidth
                    disabled={isLoading}
                    onClick={onLoginClick}
                >
                    Войти
                </Button>
            </div>
        </div>
    )
}
