import { FC, useState } from 'react'
import { cn } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'

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
    >
      <Button onClick={onToggle}>toggle</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher className={styles.theme} />
        <LangSwitcher />
      </div>
    </div>
  )
}
