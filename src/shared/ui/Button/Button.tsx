import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <button
      className={cn(styles.Button, {}, [className, styles[theme]])}
      {...props}
    >
      {children}
    </button>
  )
}