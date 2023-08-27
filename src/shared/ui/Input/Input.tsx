import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { calculateStringWidth } from './lib/calculateStringWidth'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    label?: string
}

export const Input: FC<InputProps> = ({
    className,
    value,
    onChange,
    label,
    type = 'text',
    autoFocus,
    ...props
}) => {
    const ref = useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [valueSoLong, setValueSoLong] = useState<boolean>(false)
    const [inputValueWidth, setInputValueWidth] = useState<number>(0)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onChange?.(value)
    }

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        const target = e.target
        const value = target.value

        const selectionStart = target.selectionStart

        const valueBeforeSelectionStart = value.slice(0, selectionStart)
        const currentInputValueWidth = calculateStringWidth(
            valueBeforeSelectionStart
        )

        if (currentInputValueWidth >= ref.current.clientWidth) {
            setValueSoLong(true)
        } else {
            setValueSoLong(false)
        }

        setInputValueWidth(currentInputValueWidth)
    }

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            ref.current.focus()
        }
    }, [autoFocus])

    return (
        <div className={cn(styles.Input, {}, [className])}>
            {label && <div className={styles.label}>{`${label}>`}</div>}
            <div className={styles.inputWrapper}>
                <input
                    ref={ref}
                    type={type}
                    value={value}
                    className={cn(styles.input, {
                        [styles.valueSoLong]: valueSoLong,
                    })}
                    onChange={changeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...props}
                />
                {isFocused && !valueSoLong && (
                    <span
                        className={styles.caret}
                        style={{
                            left: `${inputValueWidth}px`,
                        }}
                    ></span>
                )}
            </div>
        </div>
    )
}
