import { FC, Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader label="Загрузка страницы..." />}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
