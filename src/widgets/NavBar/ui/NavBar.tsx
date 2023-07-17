import { FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'

interface NavbarProps {
  className?: string
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
  
    return (
        <div className={cn(styles.navbar, {}, [className])}>
            <div className={cn(styles.links)}>
               
            </div>
        </div>
    )
}
