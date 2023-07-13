type Mods = Record<string, boolean | string>

export const cn = (
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string => {
    const resultArray = [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
    
    return resultArray.join(' ')
}
