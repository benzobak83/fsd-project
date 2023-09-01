import { Button } from 'shared/ui/Button/Button'
import { FC, useCallback } from 'react'
import { LoginForm } from 'features/AuthByUsername'
import { Modal } from 'shared/ui/Modal/Modal'
import { cn } from 'shared/lib/classNames/classNames'
import { getAuthData, userActions } from 'entities/User'
import {
    useAppDispatch,
    useAppSelector,
} from 'shared/lib/hooks/useTypedSelectorAndDispatch'
import { useModal } from 'shared/lib/hooks/useModal'
import styles from './NavBar.module.scss'

interface NavbarProps {
    className?: string
}

const initModals = {
    loginModal: false,
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
    const dispatch = useAppDispatch()

    const authData = useAppSelector(getAuthData)

    const { registerModal, registerTrigger } = useModal(initModals)

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    if (authData) {
        return (
            <div className={cn(styles.navbar, {}, [className])}>
                <div className={cn(styles.links)}>
                    <Button onClick={onLogout} invertedColor>
                        Выйти
                    </Button>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className={cn(styles.navbar, {}, [className])}>
                <div className={cn(styles.links)}>
                    <Button {...registerTrigger('loginModal')} invertedColor>
                        Войти
                    </Button>
                </div>
            </div>
            <Modal {...registerModal('loginModal')} title="Авторизация">
                <LoginForm />
            </Modal>
        </>
    )
}
