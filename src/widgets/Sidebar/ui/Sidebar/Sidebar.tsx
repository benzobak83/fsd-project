import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button } from 'shared/ui/Button/Button'
import { FC, useState } from 'react'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { cn } from 'shared/lib/classNames/classNames'
import AboutSvg from 'shared/assets/icons/about.svg'
import HomeSvg from 'shared/assets/icons/home.svg'
import LeftArrowSvg from 'shared/assets/icons/left-arrow.svg'
import MenuSvg from 'shared/assets/icons/menu.svg'
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
                className,
            ])}
            data-testid="sidebar"
        >
            <div className={styles.items}>
                <Button
                    data-testid="sidebar-toggle"
                    onClick={onToggle}
                    className={cn(styles.collapseBtn)}
                >
                    {collapsed ? (
                        <MenuSvg className={styles.icon} />
                    ) : (
                        <LeftArrowSvg className={styles.icon} />
                    )}
                </Button>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                >
                    <HomeSvg className={styles.icon} />
                    <span className={styles.itemText}>Main</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                >
                    <AboutSvg className={styles.icon} />
                    <div className={styles.itemText}>About</div>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.theme} />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    )
}
