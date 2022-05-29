import { setError } from '../store/appSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function ErrorToast() {

    const dispatch = useAppDispatch()
    const errorMsg = useAppSelector(state => state.appState.error)

    return (
        <div className='error-toast'>
            <div className='error-toast__error-msg'>{errorMsg}</div>
            <button className='btn error-toast__btn' onClick={() => dispatch(setError(null))}>close</button>
        </div>
    );
}

export default ErrorToast;