const LETTER_WIDTH = 9

export const calculateCaretPosition = (caretPosition: number) => {
    return caretPosition * LETTER_WIDTH
}
