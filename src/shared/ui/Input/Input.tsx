import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react'
import { calculateCaretPosition } from './lib/calculateCaretPosition'
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
    const [caretPosition, setCaretPosition] = useState<number>(0)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        onChange?.(target.value)

        if (target.value.length < caretPosition) {
            //когда удаляется символ в середине текста каретка на 1мс становится в конец инпута,
            //эта проверка предовтращает данное поведение
            setCaretPosition(e.target.value.length)
        }
    }

    const onBlur = () => {
        setIsFocused(false)
    }
    const onFocus = () => {
        setIsFocused(true)
    }

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart)
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
                    onChange={onChangeHandler}
                    value={value}
                    className={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...props}
                />
                {isFocused && (
                    <span
                        className={styles.caret}
                        style={{
                            left: `${calculateCaretPosition(caretPosition)}px`,
                        }}
                    ></span>
                )}
            </div>
        </div>
    )
}
