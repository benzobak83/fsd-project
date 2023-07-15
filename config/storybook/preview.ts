import { Preview } from '@storybook/react'
import { StyleDecarator } from '../../src/shared/config/storybook/StyleDecarator/StyleDecarator';
import { ThemeDecarator } from '../../src/shared/config/storybook/ThemeDecarator/ThemeDecarator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    decorators: [StyleDecarator, ThemeDecarator]
}




export default preview;
