import { I18nextProvider } from "react-i18next";
import { ReactNode } from "react";
import { i18nForTest } from "shared/config/i18n/i18nForTest";
import { render } from "@testing-library/react";

export const renderWithTranslation = (component: ReactNode) => {
    return render(
        <I18nextProvider i18n={i18nForTest}>
            {component}
        </I18nextProvider>
    )
}
