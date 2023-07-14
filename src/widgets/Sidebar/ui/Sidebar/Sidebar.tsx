import { BugButton } from 'app/providers/ErrorBoundary'
import { Button } from 'shared/ui/Button/Button'
import { FC, useState } from 'react'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div
            className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [
                className
            ])}
            data-testid='sidebar'
        >
            <Button 
                data-testid='sidebar-toggle'
                onClick={onToggle}>toggle</Button>
            <BugButton/>
            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.theme} />
                <LangSwitcher />
            </div>
        </div>
    )
}
