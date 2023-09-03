import {
    AppDispatch,
    ReduxStoreWithReducerManager,
    RootState,
} from '../../../app/providers/StoreProvider/config/types/store'
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
    useStore,
} from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useStoreWithReducerManager = () =>
    useStore() as ReduxStoreWithReducerManager
