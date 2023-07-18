import {FC, ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import { ModalCloseFn } from 'shared/lib/hooks/useModal'
import { Portal } from '../Portal/Portal'
import {cn} from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'

interface ModalProps {
   className?: string
   children: ReactNode
   open: boolean;
   onClose: ModalCloseFn
}

const ANIMATION_DELAY = 200

export const Modal:FC<ModalProps> = ({className, children, open, onClose}) => {
    const [isClosing, setIsClosing] = useState(false)
    
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const handleClickContent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const closeModal = useCallback(() => {
        setIsClosing(true)

        timerRef.current = setTimeout(() => {
            onClose()
            setIsClosing(false)
        }, ANIMATION_DELAY)
    }, [onClose])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal()
            }
        },
        [closeModal]
    )

    useEffect(() => {
        if(open) {
            window.addEventListener('keydown', onKeyDown)
        }
        else {
            window.removeEventListener('keydown', onKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown)
            clearTimeout(timerRef.current)
        }
      
    }, [onKeyDown, open])

    const mods = {
        [styles.opened]: open,
        [styles.closing]: isClosing 
    }

    return (
        <Portal>
            <div className={cn(styles.Modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeModal}>
                    <div className={styles.content} onClick={handleClickContent}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
