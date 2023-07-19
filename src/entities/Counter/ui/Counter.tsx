import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useAppSelector } from 'shared/lib/hooks/useTypedSelectorAndDispatch'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
    const dispatch = useDispatch()

    const counterValue = useAppSelector(getCounterValue)

    const { t } = useTranslation()

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value">value: {counterValue}</h1>
            <Button
                variant={ButtonVariant.OUTLINE}
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                variant={ButtonVariant.OUTLINE}
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('decrement')}
            </Button>
        </div>
    )
}
