import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children: ReactNode
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...props
}) => {
    return (
        <Link
            className={cn(styles.AppLink, {}, [className, styles[theme]])}
            {...props}
        >
            {children}
        </Link>
    )
}
