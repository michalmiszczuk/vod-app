import React, { useEffect, useState } from 'react';
import { useAuthenticateUserMutation } from '../store/api';
import { setUser } from '../store/slices/appSlice';
import { useAppDispatch } from '../store/hooks';
import LoginForm from './LoginForm';

function SplashScreen() {
    const [loginScreen, setLoginScreen] = useState(false)
    const [authenticate, { data, isSuccess }] = useAuthenticateUserMutation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('auth-token', data!.AuthorizationToken.Token);
            dispatch(setUser(data!.User.UserName))
        }
    }, [data, dispatch, isSuccess])

    return (
        <div className='splash-screen'>
            <h1 className='splash-screen__title'>EXPERIENCE NEW DIMENSION OF MOVIES</h1>
            <div className='splash-screen__login-box'>
                <button onClick={() => authenticate('_')} className='splash-screen__login-box__btn'>LOG AS A GUEST</button>
                <button onClick={() => setLoginScreen(true)} className='splash-screen__login-box__btn'>LOG IN</button>
                {loginScreen && <LoginForm onCloseForm={() => setLoginScreen(false)} />}
            </div>
        </div>
    );
}

export default SplashScreen;