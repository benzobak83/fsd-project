import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextColor } from 'shared/ui/Text/Text'
import { cn } from 'shared/lib/classNames/classNames'
import { getLoginState } from '../../model/selectors/getLoginState'
import { loginActions, loginReducer } from '../..//model/slice/loginSlice'
import { loginByUsername } from '../..//model/services/loginByUsername/loginByUsername'
import { memo, useCallback, useEffect } from 'react'
import {
    useAppDispatch,
    useAppSelector,
    useStoreWithReducerManager,
} from 'shared/lib/hooks/useTypedSelectorAndDispatch'
import styles from './LoginForm.module.scss'

interface LoginFormProps {
    className?: string
}

const LoginForm = memo<LoginFormProps>(({ className }) => {
    const dispatch = useAppDispatch()
    const store = useStoreWithReducerManager()

    const loginState = useAppSelector(getLoginState)

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
        dispatch(
            loginByUsername({
                username: loginState?.username,
                password: loginState?.password,
            })
        )
    }, [dispatch, loginState?.username, loginState?.password])

    useEffect(() => {
        store.reducerManager.add('login', loginReducer)
        dispatch({ type: '@INIT login reducer' })

        return () => {
            store.reducerManager.remove('login')
            dispatch({ type: '@REMOVE login reducer' })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!Object.keys(loginState || {}).length) {
        return null
    }

    const { username, password, error, isLoading } = loginState

    return (
        <div className={cn(styles.LoginForm, {}, [className])}>
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
            {error && (
                <div className={styles.errorWrapper}>
                    <Text color={TextColor.ERROR}>{error}</Text>
                </div>
            )}
        </div>
    )
})

export default LoginForm
