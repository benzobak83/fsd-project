import { Button } from 'shared/ui/Button/Button'
import { FC } from 'react'
import { Modal } from 'shared/ui/Modal/Modal'
import { cn } from 'shared/lib/classNames/classNames'
import { useModal } from 'shared/lib/hooks/useModal'
import styles from './NavBar.module.scss'

interface NavbarProps {
  className?: string
}

const initModals = {
    loginModal: false
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
    const { registerModal, registerTrigger } = useModal(initModals)
    return (
        <>
            <div className={cn(styles.navbar, {}, [className])}>
                <div className={cn(styles.links)}>
                    <Button {...registerTrigger('loginModal')} invertedColor>Войти</Button>
                </div>
            </div>
            <Modal {...registerModal('loginModal')}>
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
                    cumque ducimus omnis, praesentium voluptatibus eveniet earum
                    doloremque veritatis expedita, sed porro aliquid at labore itaque
                    neque, totam magnam dignissimos autem?
                </div>
            </Modal>
        </>
    )
}
