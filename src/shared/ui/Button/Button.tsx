import { ButtonHTMLAttributes, FC } from 'react'
import { Mods, cn } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ButtonVariant {
    TEXT = 'text',
    OUTLINE = 'outline',
    CONTAINED = 'contained',
}

export enum ButtonColor {
    PRIMARY = 'primary',
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
    XL = 'xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
    square?: boolean
    invertedColor?: boolean
    fullWidth?: boolean
}

export const Button: FC<ButtonProps> = ({
    className,
    children,
    variant = ButtonVariant.TEXT,
    color = ButtonColor.PRIMARY,
    size = ButtonSize.M,
    invertedColor,
    fullWidth,
    square,
    ...props
}) => {
    const mods: Mods = {
        [styles[variant]]: !!variant,
        [styles[color]]: !!color,
        [styles[size]]: !!size,
        [styles.invertedColor]: invertedColor,
        [styles.square]: square,
        [styles.fullWidth]: fullWidth,
    }

    return (
        <button className={cn(styles.Button, mods, [className])} {...props}>
            {children}
        </button>
    )
}
