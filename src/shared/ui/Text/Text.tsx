import { FC, ReactNode } from 'react'
import { Mods, cn } from 'shared/lib/classNames/classNames'
import styles from './Text.module.scss'

export enum TextColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
}
export enum TextVariant {
    M = 'm',
    L = 'l',
    XL = 'xl',
}

interface TextProps {
    className?: string
    color?: TextColor
    variant?: TextVariant
    children: ReactNode
}

export const Text: FC<TextProps> = ({
    className,
    color = TextColor.PRIMARY,
    variant = TextVariant.M,
    children,
}) => {
    const mods: Mods = {
        [styles[color]]: !!color,
        [styles[variant]]: !!variant,
    }
    return <div className={cn(styles.Text, mods, [className])}>{children}</div>
}
