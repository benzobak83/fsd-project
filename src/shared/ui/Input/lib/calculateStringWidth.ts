import calculateSize from 'calculate-size'

const FONT_SIZE = '16px'
const FONT_FAMILY = 'consolas'

export const calculateStringWidth = (value: string) => {
    return calculateSize(String(value), {
        font: FONT_FAMILY,
        fontSize: FONT_SIZE,
    }).width
}
