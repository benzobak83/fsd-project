import { FC } from 'react'
import { Link } from 'react-router-dom'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const NavBar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={cn(styles.links)}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
          Main
        </AppLink>
        <AppLink to={'about'} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  )
}
