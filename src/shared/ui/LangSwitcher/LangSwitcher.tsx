import { Button } from '../Button/Button'
import { FC } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return <Button className={cn('', {}, [className])} onClick={toggle}>{t('Язык')}</Button>
}
